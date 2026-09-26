const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Software Development', 'Digital Advertising', 'IT Training & Internships', 'Business Solutions'],
      default: 'Software Development'
    },
    iconName: {
      type: String,
      default: 'Code'
    },
    summary: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    keyBenefits: [String],
    process: [String],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Service', serviceSchema, 'services');
