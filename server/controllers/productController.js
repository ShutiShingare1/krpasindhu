const mongoose = require('mongoose');
const Product = require('../models/Product');
const { seedProducts } = require('../services/seedData');

// @desc    Get all active products
// @route   GET /api/products
const getProducts = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const products = await Product.find({ status: { $ne: 'discontinued' } }).sort({ displayOrder: 1, createdAt: 1 });
      if (products.length > 0) {
        return res.status(200).json({ success: true, count: products.length, data: products });
      }
    }
    res.status(200).json({ success: true, count: seedProducts.length, data: seedProducts });
  } catch (error) {
    res.status(200).json({ success: true, count: seedProducts.length, data: seedProducts });
  }
};

module.exports = {
  getProducts
};
