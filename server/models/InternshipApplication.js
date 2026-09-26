const mongoose = require('mongoose');

const internshipApplicationSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Internship',
      required: true
    },
    courseName: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true
    },
    alternateNumber: {
      type: String,
      trim: true,
      default: ''
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    qualification: {
      type: String,
      required: true,
      trim: true
    },
    college: {
      type: String,
      required: true,
      trim: true
    },
    passingYear: {
      type: String,
      required: true,
      trim: true
    },
    branch: {
      type: String,
      required: true,
      trim: true
    },
    technicalSkills: {
      type: String,
      trim: true,
      default: ''
    },
    preferredMode: {
      type: String,
      enum: ['Offline', 'Online', 'Hybrid'],
      default: 'Hybrid'
    },
    resumeUrl: {
      type: String,
      default: ''
    },
    motivation: {
      type: String,
      trim: true,
      default: ''
    },
    howHeard: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['submitted', 'under_review', 'accepted', 'rejected', 'contacted'],
      default: 'submitted'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('InternshipApplication', internshipApplicationSchema, 'internshipApplications');
