// backend/routes/dataRoutes.js
const express = require('express');
const SalesData = require('../models/sales');

const   router = express.Router();

// Fetch all sales data
router.get('/', async (req, res) => {
  try {
    const sales = await SalesData.find({});
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/post', async (req, res) => {
    const salesRecords = req.body; // Array of sales data from the client
  
    try {
      const result = await SalesData.insertMany(salesRecords);
      res.status(201).json({
        message: `${result.length} records inserted successfully!`,
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: 'Error inserting records', error: err.message });
    }
  });


module.exports = router;
