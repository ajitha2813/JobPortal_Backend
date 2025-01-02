const express = require('express');
const router = express.Router();
const { verifyToken } = require('../Middleware/verifyToken');
const { getAllJobs, createJob, saveJob , getSavedJobs , filterJobs} = require('../Controller/Job_controller');

// Route to get all jobs
router.get('/job/getAll', getAllJobs);

// Get Job Based on user id
// Backend route (ensure this matches your route)
router.post('/job/getSavedJobs', getSavedJobs);

// Route to create a new job    
router.post('/job/create', verifyToken, createJob);

// Route to save a job
router.post('/job/save', verifyToken, saveJob);

// Filter Jobs
router.post('/job/filter', verifyToken, filterJobs);

module.exports = router;