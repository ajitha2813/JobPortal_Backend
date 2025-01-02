const mongoose = require('mongoose');
require('dotenv').config();


const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/job-portal';


const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1); 
    }
};


module.exports = connectDB;