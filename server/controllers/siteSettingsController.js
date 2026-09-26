const SiteSettings = require('../models/SiteSettings');

// @desc    Get global site settings
// @route   GET /api/site-settings
const getSiteSettings = async (req, res, next) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = await SiteSettings.create({});
    }
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSiteSettings
};
