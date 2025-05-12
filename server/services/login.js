// Import bcrypt for password comparison
const bcrypt = require('bcrypt');

// Import the User model
const User = require('../models/user.models');

// Import utilities for token generation and verification
const { generateToken } = require('../utils/jwtUtils');
const { verifyToken } = require('../utils/authMiddleware');

// Handles user login by validating credentials and returning a JWT
async function login(email, password) {
    try {
        // Look up the user by email
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error("User not found");
        }

        // Compare provided password with stored hashed password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error("Incorrect Password");
        }

        // Generate JWT for the authenticated user
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        console.log("Login error:", error.message);
        // Throw generic error to avoid leaking details to client
        throw new Error("Invalid credentials");
    }
}

// Issues a new token based on a valid existing one
async function refreshToken(oldToken) {
    try {
        // Verify the old token and extract the payload
        const decodedToken = verifyToken(oldToken);

        // Find the user associated with the token
        const user = await User.findById(decodedToken.id); // Use .id instead of ._id to match payload

        if (!user) {
            throw new Error("User not found");
        }

        // Generate a new token using current user data
        const newToken = generateToken(user);
        return newToken;
    } catch (error) {
        // Throw an error if token is invalid or user doesn't exist
        throw new Error("Invalid token");
    }
}

// Export the login and token refresh functions
module.exports = {
    login,
    refreshToken
};
