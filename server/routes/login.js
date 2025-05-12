// Import Express and middleware
const express = require('express');
const cors = require('cors');

// Import controller functions for login and token refresh
const { login, refreshToken } = require('../controllers/login');

// Create a new router instance
const router = express.Router();

// Enable CORS for this router (optional if already enabled globally)
router.use(cors());

// Route to handle user login
// Expects: { email, password } in request body
router.post("/login", login);

// Route to handle JWT refresh
// Expects: { token } in request body
router.post("/refresh-token", refreshToken);

// Export the router to be used in the main app
module.exports = router;