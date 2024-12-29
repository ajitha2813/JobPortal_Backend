const express = require('express');
const router = express.Router();
const { verfiyToken } = require('../Middleware/verifyToken');
const { getAllJobs, createJob, saveJob , getSavedJobs , filterJobs} = require('../Controller/jobController');

// Route to get all jobs
router.get('/job/getAll', getAllJobs);

// Get Job Based on user id
router.get('/job/getSavedJobs', getSavedJobs);

// Route to create a new job    
router.post('/job/create', verfiyToken, createJob);

// Route to save a job
router.post('/job/save', verfiyToken, saveJob);

// Filter Jobs
router.post('/job/filter', verfiyToken, filterJobs);

module.exports = router;