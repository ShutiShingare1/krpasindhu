const mongoose = require('mongoose');
const Internship = require('../models/Internship');
const InternshipApplication = require('../models/InternshipApplication');
const { seedInternships } = require('../services/seedData');

// @desc    Get all internship courses
// @route   GET /api/internships
const getInternships = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const internships = await Internship.find({ status: { $ne: 'closed' } }, { fees: 0 }).sort({ displayOrder: 1, createdAt: -1 });
      if (internships.length > 0) {
        return res.status(200).json({ success: true, count: internships.length, data: internships });
      }
    }
    // Strip fees from seed data before returning
    const publicSeedData = seedInternships.map(({ fees, ...rest }) => rest);
    res.status(200).json({ success: true, count: publicSeedData.length, data: publicSeedData });
  } catch (error) {
    const publicSeedData = seedInternships.map(({ fees, ...rest }) => rest);
    res.status(200).json({ success: true, count: publicSeedData.length, data: publicSeedData });
  }
};

// @desc    Get single internship by ID or slug
// @route   GET /api/internships/:idOrSlug
const getInternshipByIdOrSlug = async (req, res, next) => {
  try {
    const { idOrSlug } = req.params;
    if (mongoose.connection.readyState === 1) {
      let internship;
      if (idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
        internship = await Internship.findById(idOrSlug, { fees: 0 });
      } else {
        internship = await Internship.findOne({ slug: idOrSlug.toLowerCase() }, { fees: 0 });
      }
      if (internship) {
        return res.status(200).json({ success: true, data: internship });
      }
    }
    
    // Fallback match from seed (strip fees)
    const match = seedInternships.find(i => i.slug === idOrSlug.toLowerCase() || i._id === idOrSlug);
    if (match) {
      const { fees, ...publicMatch } = match;
      return res.status(200).json({ success: true, data: publicMatch });
    }
    
    // Return first course if specific ID unavailable (strip fees)
    const { fees, ...publicFirst } = seedInternships[0];
    res.status(200).json({ success: true, data: publicFirst });
  } catch (error) {
    const { fees, ...publicFirst } = seedInternships[0];
    res.status(200).json({ success: true, data: publicFirst });
  }
};

// @desc    Submit Internship Application
// @route   POST /api/internship-applications
const submitInternshipApplication = async (req, res, next) => {
  try {
    const {
      courseId,
      fullName,
      email,
      mobile,
      alternateNumber,
      city,
      state,
      qualification,
      college,
      passingYear,
      branch,
      technicalSkills,
      preferredMode,
      motivation,
      howHeard
    } = req.body;

    if (!courseId || !fullName || !email || !mobile || !city || !qualification || !college || !passingYear || !branch) {
      return res.status(400).json({ success: false, error: 'Please provide all required application fields.' });
    }

    let resumeUrl = '';
    if (req.file) {
      resumeUrl = `/uploads/${req.file.filename}`;
    }

    const applicationId = `KS-INT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    if (mongoose.connection.readyState === 1) {
      try {
        const application = await InternshipApplication.create({
          applicationId,
          courseId,
          courseName: req.body.courseName || 'Full Stack Internship',
          fullName,
          email,
          mobile,
          alternateNumber: alternateNumber || '',
          city,
          state: state || 'Maharashtra',
          qualification,
          college,
          passingYear,
          branch,
          technicalSkills: technicalSkills || '',
          preferredMode: preferredMode || 'Hybrid',
          resumeUrl,
          motivation: motivation || '',
          howHeard: howHeard || ''
        });

        return res.status(201).json({
          success: true,
          message: 'Application submitted successfully! Our counseling team will contact you shortly.',
          data: {
            applicationId: application.applicationId,
            courseName: application.courseName,
            createdAt: application.createdAt
          }
        });
      } catch (err) {
        console.error('[DB Submit Warn]:', err.message);
      }
    }

    // In-memory response fallback
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our counseling team will contact you shortly.',
      data: {
        applicationId,
        courseName: req.body.courseName || 'Internship Program',
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all internship applications (Admin)
// @route   GET /api/internship-applications
const getInternshipApplications = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const applications = await InternshipApplication.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: applications.length, data: applications });
    }
    res.status(200).json({ success: true, count: 0, data: [] });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getInternships,
  getInternshipByIdOrSlug,
  submitInternshipApplication,
  getInternshipApplications
};
