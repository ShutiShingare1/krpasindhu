const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    designation: {
      type: String,
      required: true,
      trim: true
    },
    department: {
      type: String,
      required: true,
      trim: true
    },
    photoUrl: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    skills: [String],
    experience: {
      type: String,
      default: ''
    },
    linkedinUrl: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
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

module.exports = mongoose.model('TeamMember', teamMemberSchema, 'teamMembers');
