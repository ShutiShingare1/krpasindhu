const mongoose = require('mongoose');

const connectDB = async () => {
  const connStr = process.env.MONGODB_URI;

  // In production, MONGODB_URI must be set — warn clearly if missing
  if (!connStr) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[MongoDB Error] MONGODB_URI environment variable is not set. Please configure it in your hosting dashboard.');
    } else {
      console.warn('[MongoDB] MONGODB_URI not set, falling back to localhost.');
    }
  }

  const uri = connStr || 'mongodb://127.0.0.1:27017/krupasindhu';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000, // 10s — Atlas can be slow to respond on cold start
      connectTimeoutMS: 10000
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`[MongoDB Error] Connection failed: ${error.message}`);
    // Do NOT process.exit — allow server to run in fallback/seed mode
    return null;
  }
};

module.exports = connectDB;
