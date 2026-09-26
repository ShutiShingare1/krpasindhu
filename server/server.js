const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start listening
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(` Krupa Sindhu Advertising & Software Pvt. Ltd. API `);
    console.log(` Established: 2018 | ISO 9001:2015 Certified       `);
    console.log(` Server running on http://localhost:${PORT}        `);
    console.log(`====================================================`);
  });
};

startServer();
