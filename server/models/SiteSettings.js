const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      default: 'Krupa Sindhu Advertising & Software Pvt. Ltd.'
    },
    establishedYear: {
      type: Number,
      default: 2018
    },
    directorName: {
      type: String,
      default: 'Vivek Dange'
    },
    certification: {
      type: String,
      default: 'ISO 9001:2015 Certified'
    },
    email: {
      type: String,
      default: 'admin@krupasindhu.org.in'
    },
    phone: {
      type: String,
      default: '7350570999'
    },
    whatsapp: {
      type: String,
      default: '7350570999'
    },
    heroHeadline: {
      type: String,
      default: 'Building Skills. Delivering Technology. Creating Opportunities.'
    },
    heroSubheadline: {
      type: String,
      default: 'ISO 9001:2015 Certified Premier Software Development, Digital Advertising & Career-Oriented Training Ecosystem in Maharashtra.'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('SiteSettings', siteSettingsSchema, 'siteSettings');
