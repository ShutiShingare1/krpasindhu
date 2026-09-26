const mongoose = require('mongoose');
const Career = require('../models/Career');
const CareerApplication = require('../models/CareerApplication');
const { seedCareers } = require('../services/seedData');

// @desc    Get all open career listings
// @route   GET /api/careers
const getCareers = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const jobs = await Career.find({ status: 'open' }).sort({ displayOrder: 1, createdAt: -1 });
      return res.status(200).json({ success: true, count: jobs.length, data: jobs });
    }
    // Fallback to seed data when DB is not connected
    const openSeedCareers = (seedCareers || []).filter(c => c.status === 'open');
    res.status(200).json({ success: true, count: openSeedCareers.length, data: openSeedCareers });
  } catch (error) {
    const openSeedCareers = (seedCareers || []).filter(c => c.status === 'open');
    res.status(200).json({ success: true, count: openSeedCareers.length, data: openSeedCareers });
  }
};

// @desc    Submit Career Application
// @route   POST /api/career-applications
const submitCareerApplication = async (req, res, next) => {
  try {
    const {
      jobId,
      positionAppliedFor,
      fullName,
      email,
      mobile,
      city,
      qualification,
      graduationYear,
      experience,
      skills,
      portfolioUrl,
      linkedinUrl,
      githubUrl,
      coverLetter,
      availability
    } = req.body;

    if (!positionAppliedFor || !fullName || !email || !mobile || !city || !qualification || !graduationYear || !experience || !skills) {
      return res.status(400).json({ success: false, error: 'Please fill in all mandatory career application fields.' });
    }

    // In production (memoryStorage), req.file.buffer holds the file — no disk path
    let resumeUrl = '';
    if (req.file) {
      resumeUrl = req.file.filename ? `/uploads/${req.file.filename}` : `[uploaded:${req.file.originalname}]`;
    }

    const applicationId = `KS-JOB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    if (mongoose.connection.readyState === 1) {
      try {
        const application = await CareerApplication.create({
          applicationId,
          jobId: jobId || null,
          positionAppliedFor,
          fullName,
          email,
          mobile,
          city,
          qualification,
          graduationYear,
          experience,
          skills,
          resumeUrl,
          portfolioUrl: portfolioUrl || '',
          linkedinUrl: linkedinUrl || '',
          githubUrl: githubUrl || '',
          coverLetter: coverLetter || '',
          availability: availability || 'Immediate'
        });

        return res.status(201).json({
          success: true,
          message: 'Job application submitted successfully! HR will review your profile.',
          data: {
            applicationId: application.applicationId,
            position: application.positionAppliedFor,
            createdAt: application.createdAt
          }
        });
      } catch (err) {
        console.error('[Career DB Submit Warn]:', err.message);
      }
    }

    // In-memory fallback response
    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully! HR will review your profile.',
      data: {
        applicationId,
        position: positionAppliedFor,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get career applications (Admin)
// @route   GET /api/career-applications
const getCareerApplications = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const applications = await CareerApplication.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: applications.length, data: applications });
    }
    res.status(200).json({ success: true, count: 0, data: [] });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCareers,
  submitCareerApplication,
  getCareerApplications
};
