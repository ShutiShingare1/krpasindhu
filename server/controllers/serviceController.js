const mongoose = require('mongoose');
const Service = require('../models/Service');
const { seedServices } = require('../services/seedData');

// @desc    Get all services
// @route   GET /api/services
const getServices = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const services = await Service.find({ status: 'active' }).sort({ displayOrder: 1, createdAt: 1 });
      if (services.length > 0) {
        return res.status(200).json({ success: true, count: services.length, data: services });
      }
    }
    // Fallback if DB is connecting / offline
    res.status(200).json({ success: true, count: seedServices.length, data: seedServices });
  } catch (error) {
    res.status(200).json({ success: true, count: seedServices.length, data: seedServices });
  }
};

module.exports = {
  getServices
};
