require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth/auth'); 

const port = 3001;

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(port, () => console.log(`Server running on port ${port}`));

