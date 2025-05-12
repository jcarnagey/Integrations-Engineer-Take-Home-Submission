// Import Express framework and User model
const express = require('express');
const User = require('../models/user.models.js');

// Create a new router instance
const router = express.Router();

// Import controller functions for user operations
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js');

// Route to get all users
router.get('/', getUsers);

// Route to get a single user by ID
router.get('/:id', getUser);

// Route to register a new user
router.post('/register', createUser);

// Route to update a user by ID
router.put('/:id', updateUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

// Export the router to be used in the main application
module.exports = router;