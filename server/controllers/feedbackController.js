const mongoose = require('mongoose');
const Feedback = require('../models/Feedback');

// @desc    Submit new contact feedback
// @route   POST /api/feedback
const createFeedback = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please provide name, email, and message.' });
    }

    let feedbackId = `FB-${Date.now()}`;

    if (mongoose.connection.readyState === 1) {
      try {
        const feedback = await Feedback.create({
          name,
          email,
          message
        });
        feedbackId = feedback._id;
      } catch (err) {
        console.error('[Feedback DB Write]:', err.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will get back to you shortly.',
      data: {
        id: feedbackId,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all feedback submissions (Admin / Internal)
// @route   GET /api/feedback
const getFeedbacks = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const feedbacks = await Feedback.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: feedbacks.length, data: feedbacks });
    }
    res.status(200).json({ success: true, count: 0, data: [] });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFeedback,
  getFeedbacks
};
