const express = require('express');
const router = express.Router();
const { getInternships, getInternshipByIdOrSlug, submitInternshipApplication, getInternshipApplications } = require('../controllers/internshipController');
const upload = require('../middleware/upload');
const { formLimiter } = require('../middleware/rateLimiter');

router.get('/internships', getInternships);
router.get('/internships/:idOrSlug', getInternshipByIdOrSlug);
router.post('/internship-applications', formLimiter, upload.single('resume'), submitInternshipApplication);
router.get('/internship-applications', getInternshipApplications);

module.exports = router;
