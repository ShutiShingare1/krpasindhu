const express = require('express');
const router = express.Router();
const { getDatabaseOverview, triggerDatabaseSeed } = require('../controllers/adminController');

router.get('/collections', getDatabaseOverview);
router.post('/seed', triggerDatabaseSeed);

module.exports = router;
