const mongoose = require('mongoose');

const careerApplicationSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Career',
      required: false
    },
    positionAppliedFor: {
      type: String,
      required: true,
      trim: true
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
    city: {
      type: String,
      required: true,
      trim: true
    },
    qualification: {
      type: String,
      required: true,
      trim: true
    },
    graduationYear: {
      type: String,
      required: true,
      trim: true
    },
    experience: {
      type: String,
      required: true,
      trim: true
    },
    skills: {
      type: String,
      required: true,
      trim: true
    },
    resumeUrl: {
      type: String,
      default: ''
    },
    portfolioUrl: {
      type: String,
      default: ''
    },
    linkedinUrl: {
      type: String,
      default: ''
    },
    githubUrl: {
      type: String,
      default: ''
    },
    coverLetter: {
      type: String,
      trim: true,
      default: ''
    },
    availability: {
      type: String,
      default: 'Immediate'
    },
    status: {
      type: String,
      enum: ['submitted', 'under_review', 'shortlisted', 'interviewing', 'rejected', 'hired'],
      default: 'submitted'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('CareerApplication', careerApplicationSchema, 'careerApplications');
