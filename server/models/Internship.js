const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, 'Course name is required'],
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    shortSummary: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    syllabus: [
      {
        moduleTitle: String,
        topics: [String]
      }
    ],
    duration: {
      type: String,
      required: true, // e.g. "3 Months", "6 Months"
      trim: true
    },
    fees: {
      type: String,
      default: '',
      trim: true
    },
    eligibility: {
      type: String,
      required: true, // e.g. "BE/BTech, BCA, MCA, Diploma in CS/IT"
      trim: true
    },
    mode: {
      type: String,
      enum: ['Offline', 'Online', 'Hybrid'],
      default: 'Hybrid'
    },
    skills: [String],
    certificate: {
      type: String,
      default: 'ISO 9001:2015 Verified Certificate of Excellence'
    },
    enrollmentEnabled: {
      type: Boolean,
      default: true
    },
    brochureUrl: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['active', 'upcoming', 'closed'],
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

module.exports = mongoose.model('Internship', internshipSchema, 'internships');
