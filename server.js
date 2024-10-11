// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Sales = require('./models/sales');
const salesRoutes = require('./routes/dataroutes');
require('dotenv').config()


const PORT = process.env.PORT || 2000;

const app = express();
app.use(cors());
app.use(express.json());







mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/',async(req,res)=>{
    res.json("Hii Welcome");
})

// app.post('/api/sales/post',as)

// app.post('/api/sales/post', async (req, res) => {
//     const salesRecords = req.body; // Array of sales data from the client
  
//     try {
//       const result = await Sales.insertMany(salesRecords);
//       res.status(201).json({
//         message: `${result.length} records inserted successfully!`,
//         data: result,
//       });
//     } catch (err) {
//       res.status(500).json({ message: 'Error inserting records', error: err.message });
//     }
//   });
  

// Endpoint to get sales data
// app.get('/api/sales', async (req, res) => {
//   try {
//     const sales = await Sales.find();
//     res.json(sales);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });



app.use('/api/sales', salesRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
