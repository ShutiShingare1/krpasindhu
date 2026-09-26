const express = require('express');
const router = express.Router();
const { getCareers, submitCareerApplication, getCareerApplications } = require('../controllers/careerController');
const upload = require('../middleware/upload');
const { formLimiter } = require('../middleware/rateLimiter');

router.get('/careers', getCareers);
router.post('/career-applications', formLimiter, upload.single('resume'), submitCareerApplication);
router.get('/career-applications', getCareerApplications);

module.exports = router;
