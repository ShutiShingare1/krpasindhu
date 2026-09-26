const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');
const { formLimiter } = require('../middleware/rateLimiter');

router.post('/', formLimiter, createFeedback);
router.get('/', getFeedbacks);

module.exports = router;
