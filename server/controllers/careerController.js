const Career = require('../models/Career');
const CareerApplication = require('../models/CareerApplication');

// @desc    Get all open career listings
// @route   GET /api/careers
const getCareers = async (req, res, next) => {
  try {
    const jobs = await Career.find({ status: 'open' }).sort({ displayOrder: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    next(error);
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

    let resumeUrl = '';
    if (req.file) {
      resumeUrl = `/uploads/${req.file.filename}`;
    }

    const applicationId = `KS-JOB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

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

    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully! HR will review your profile.',
      data: {
        applicationId: application.applicationId,
        position: application.positionAppliedFor,
        createdAt: application.createdAt
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
    const applications = await CareerApplication.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCareers,
  submitCareerApplication,
  getCareerApplications
};
