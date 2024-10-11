const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
  date: Date,
  sales_amount: Number,
  product_category: String,
  region: String,
  units_sold: Number
});

module.exports = mongoose.model('Sales', SalesSchema);