const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const errorHandler = require('./middleware/errorHandler');

// Route imports
const feedbackRoutes = require('./routes/feedbackRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const careerRoutes = require('./routes/careerRoutes');
const teamRoutes = require('./routes/teamRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const productRoutes = require('./routes/productRoutes');
const siteSettingsRoutes = require('./routes/siteSettingsRoutes');
const chatRoutes = require('./routes/chatRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// Allow CORS for local development and LAN network devices
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health Check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    company: 'Krupa Sindhu Advertising & Software Pvt. Ltd.',
    iso: 'ISO 9001:2015 Certified',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api', internshipRoutes);
app.use('/api', careerRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/site-settings', siteSettingsRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/admin', adminRoutes);

// 404 Handler for undefined API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

module.exports = app;
