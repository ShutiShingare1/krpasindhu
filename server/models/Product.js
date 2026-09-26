const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      default: ''
    },
    features: [String],
    benefits: [String],
    price: {
      type: String,
      default: 'Contact for Enterprise Pricing'
    },
    brochureUrl: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['active', 'coming_soon', 'discontinued'],
      default: 'active'
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema, 'products');
