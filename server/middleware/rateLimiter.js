const rateLimit = require('express-rate-limit');

// Chat API rate limiter (max 20 requests per 15 minutes per IP)
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many chat requests from this IP. Please try again after 15 minutes.'
  }
});

// Form submission rate limiter (max 10 submissions per 15 mins)
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many form submissions. Please wait a few minutes before trying again.'
  }
});

module.exports = {
  chatLimiter,
  formLimiter
};
