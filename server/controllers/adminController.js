const mongoose = require('mongoose');

const Feedback = require('../models/Feedback');
const Internship = require('../models/Internship');
const InternshipApplication = require('../models/InternshipApplication');
const Career = require('../models/Career');
const CareerApplication = require('../models/CareerApplication');
const TeamMember = require('../models/TeamMember');
const Service = require('../models/Service');
const Product = require('../models/Product');
const SiteSettings = require('../models/SiteSettings');

const { seedDB } = require('../services/seedData');

// @desc    Get complete database statistics & collection records
// @route   GET /api/admin/collections
const getDatabaseOverview = async (req, res, next) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;

    let stats = {
      connection: isConnected
        ? `Connected to MongoDB (${mongoose.connection.host}/${mongoose.connection.name})`
        : 'Offline / Memory Fallback Active',
      dbName: isConnected ? mongoose.connection.name : 'krupasindhu',
      collections: {}
    };

    if (isConnected) {
      stats.collections.feedbacks = { count: await Feedback.countDocuments(), sample: await Feedback.find().limit(20) };
      stats.collections.internships = { count: await Internship.countDocuments(), sample: await Internship.find().limit(20) };
      stats.collections.internshipApplications = { count: await InternshipApplication.countDocuments(), sample: await InternshipApplication.find().limit(20) };
      stats.collections.careers = { count: await Career.countDocuments(), sample: await Career.find().limit(20) };
      stats.collections.careerApplications = { count: await CareerApplication.countDocuments(), sample: await CareerApplication.find().limit(20) };
      stats.collections.teamMembers = { count: await TeamMember.countDocuments(), sample: await TeamMember.find().limit(20) };
      stats.collections.services = { count: await Service.countDocuments(), sample: await Service.find().limit(20) };
      stats.collections.products = { count: await Product.countDocuments(), sample: await Product.find().limit(20) };
      stats.collections.siteSettings = { count: await SiteSettings.countDocuments(), sample: await SiteSettings.find().limit(20) };
    } else {
      // In-memory fallback snapshot
      const { seedServices, seedProducts, seedInternships, seedCareers, seedTeamMembers } = require('../services/seedData');
      stats.collections.feedbacks = { count: 0, sample: [] };
      stats.collections.internships = { count: seedInternships.length, sample: seedInternships };
      stats.collections.internshipApplications = { count: 0, sample: [] };
      stats.collections.careers = { count: seedCareers.length, sample: seedCareers };
      stats.collections.careerApplications = { count: 0, sample: [] };
      stats.collections.teamMembers = { count: seedTeamMembers.length, sample: seedTeamMembers };
      stats.collections.services = { count: seedServices.length, sample: seedServices };
      stats.collections.products = { count: seedProducts.length, sample: seedProducts };
      stats.collections.siteSettings = { count: 1, sample: [{ companyName: 'Krupa Sindhu Advertising & Software Pvt. Ltd.', address: 'Nandigram Housing Society, behind sharada nagar, Anand Nagar, Nanded, Maharashtra 431605' }] };
    }

    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};

// @desc    Trigger Database Re-Seed
// @route   POST /api/admin/seed
const triggerDatabaseSeed = async (req, res, next) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    if (!isConnected) {
      return res.status(400).json({
        success: false,
        error: 'MongoDB is currently not connected. Please ensure MONGODB_URI is set and the database is reachable.'
      });
    }

    const { seedServices, seedProducts, seedInternships, seedCareers, seedTeamMembers } = require('../services/seedData');

    await Service.deleteMany({});
    await Service.insertMany(seedServices);

    await Product.deleteMany({});
    await Product.insertMany(seedProducts);

    await Internship.deleteMany({});
    await Internship.insertMany(seedInternships);

    await Career.deleteMany({});
    await Career.insertMany(seedCareers);

    await TeamMember.deleteMany({});
    await TeamMember.insertMany(seedTeamMembers);

    await SiteSettings.deleteMany({});
    await SiteSettings.create({
      companyName: 'Krupa Sindhu Advertising & Software Pvt. Ltd.',
      establishedYear: 2018,
      directorName: 'Vivek Dange',
      certification: 'ISO 9001:2015 Certified',
      email: 'admin@krupasindhu.org.in',
      phone: '7350570999',
      whatsapp: '7350570999',
      address: 'Nandigram Housing Society, behind sharada nagar, Anand Nagar, Nanded, Maharashtra 431605'
    });

    res.status(200).json({
      success: true,
      message: 'Database seeded successfully with official team members, services, internships, products, and address.'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDatabaseOverview,
  triggerDatabaseSeed
};
