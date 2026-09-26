const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true
    },
    department: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      default: 'Nanded / Pune / Remote',
      trim: true
    },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      default: 'Full-time'
    },
    experienceRequired: {
      type: String,
      default: '0-2 Years'
    },
    description: {
      type: String,
      required: true
    },
    requirements: [String],
    responsibilities: [String],
    skills: [String],
    status: {
      type: String,
      enum: ['open', 'closed', 'draft'],
      default: 'open'
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

module.exports = mongoose.model('Career', careerSchema, 'careers');
