const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, loginUser } = require('../Controller/User_controller');

// Route to get all users
router.get('/user/getAll', getAllUsers);

// Route to create a new user
router.post('/user/register', createUser);
// Login User
router.post('/user/login', loginUser);

module.exports = router; 