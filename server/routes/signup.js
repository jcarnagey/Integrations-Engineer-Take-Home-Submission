// Import Express framework
const express = require('express');

// Import the user controller with the createUser handler
const userSignupController = require('../controllers/user.controller');

// Create a new router instance
const router = express.Router();

// Route to handle user registration
// Expects user details (e.g., first_name, last_name, email, password) in request body
router.post('/register', userSignupController.createUser);

// Export the router so it can be mounted in the main app
module.exports = router;