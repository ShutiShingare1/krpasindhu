const express = require('express');
const router = express.Router();
const { handleChat } = require('../controllers/chatController');
const { chatLimiter } = require('../middleware/rateLimiter');

router.post('/', chatLimiter, handleChat);

module.exports = router;
