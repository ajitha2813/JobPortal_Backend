const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/User.route');
const cors = require('cors');
const jobRoutes = require('./Routes/Job.route');
const app = express();


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 

// MongoDB connection
const mongoURI = 'mongodb://127.0.0.1:27017/job-portal'; // IPv4 address
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,  // Timeout after 5 seconds
})
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
