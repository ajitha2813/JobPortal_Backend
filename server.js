const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/User.routes');
const jobRoutes = require('./Routes/jobRoutes');
const app = express();
app.use(express.json()); 

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/job-portal'; // Replace with your MongoDB URI
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', userRoutes);
app.use('/api', jobRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
