// Import the User model and bcrypt for password hashing
const User = require('../models/user.models');
const bcrypt = require('bcrypt');

// Function to create a new user with a hashed password
async function createEncryptedUser(userData) {
    // Destructure the user data from the input
    const { first_name, last_name, email, password } = userData;

    // Hash the user's password with a salt round of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User instance with the hashed password and default role
    const createdUser = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        role: "customer" // Default role assigned to new users
    });

    // Save the new user to the database
    const savedUser = await createdUser.save();

    // Return the saved user document
    return savedUser;
}

// Export the function for use in other modules
module.exports = { createEncryptedUser };