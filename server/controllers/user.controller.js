// Import the User model and signup service
const User = require('../models/user.models');
const userService = require('../services/signup');

// Fetch all users from the database
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}); // Retrieve all user documents
        res.status(200).json(users);       // Respond with the list of users
    } catch (error) {
        res.status(500).json({ message: error.message }); // Server error
    }
}

// Fetch a single user by their ID
const getUser = async (req, res) => {
    try {
        const { id } = req.params;               // Get user ID from request params
        const user = await User.findById(id);    // Find user by ID
        res.status(200).json(user);              // Respond with the user data
    } catch (error) {
        res.status(500).json({ message: error.message }); // Server error
    }
}

// Create a new user with encrypted password
const createUser = async (req, res) => {
    try {
        const userData = req.body;  // Get user data from request body
        const user = await userService.createEncryptedUser(userData); // Use service to hash password & create user
        res.status(200).json({ user: user, message: "User created successfully" });
    } catch (error) {
        console.log(error); // Log error for debugging
        res.status(500).json({ message: error.message }); // Server error
    }
}

// Update an existing user by ID
const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Get user ID from request params

        const user = await User.findByIdAndUpdate(id, req.body); // Update user document

        if (!user) {
            return res.status(404).json({ message: "User not found" }); // If user doesn't exist
        }

        const updatedUser = await User.findById(id); // Fetch updated user
        res.status(200).json({ updatedUser });       // Respond with updated data

    } catch (error) {
        res.status(500).json({ message: error.message }); // Server error
    }
}

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Get user ID from request params

        const user = await User.findByIdAndDelete(id); // Delete user from DB

        if (!user) {
            return res.status(404).json({ message: "User not found" }); // If user doesn't exist
        }

        res.status(200).json({ message: "User deleted successfully" }); // Deletion success

    } catch (error) {
        res.status(500).json({ message: error.message }); // Server error
    }
}

// Export all controller functions for use in routes
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};