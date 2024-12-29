
const Users = require('../Models/Users.Model');
const jwt = require('jsonwebtoken');    

exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            isSuccess: true,
            data: users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await Users.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }


        // Create a new user document
        const newUser = await Users.create({ username, email, password });

        res.status(201).json({
            isSuccess: true,
            message: 'User created successfully',
            data: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ 
                isSuccess: false,
                message: 'User not found' 
            });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, 'JOBPORTAL', { expiresIn: '1h' });
        console.log(token);

        res.status(200).json({
            isSuccess: true,
            message: 'Login successful',
            data: user,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
