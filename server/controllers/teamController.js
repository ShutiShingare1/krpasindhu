const mongoose = require('mongoose');
const TeamMember = require('../models/TeamMember');
const { seedTeamMembers } = require('../services/seedData');

// Map local photo filenames to real frontend paths
const formattedTeam = seedTeamMembers.map((m, i) => ({
  _id: `team-${i + 1}`,
  ...m
}));

// @desc    Get active team members
// @route   GET /api/team
const getTeamMembers = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const team = await TeamMember.find({ status: 'active' }).sort({ displayOrder: 1, createdAt: 1 });
      if (team.length > 0) {
        return res.status(200).json({ success: true, count: team.length, data: team });
      }
    }
    res.status(200).json({ success: true, count: formattedTeam.length, data: formattedTeam });
  } catch (error) {
    res.status(200).json({ success: true, count: formattedTeam.length, data: formattedTeam });
  }
};

module.exports = {
  getTeamMembers
};
