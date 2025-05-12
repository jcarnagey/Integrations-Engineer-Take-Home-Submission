const User = require('../models/user.models');
const bcrypt = require('bcrypt');

// Function to create a default admin account if it doesn't already exist

async function createAdminAccount() {
    try {
        // Check if an admin user with the given email already exists
        const existingAdmin = await User.findOne({ email: "admin@test.com" });

        // If no admin exists, create a new one
        if (!existingAdmin) {
            const newAdmin = new User({
                email: "admin@test.com",
                first_name: "Admin",
                last_name: "Test",
                password: await bcrypt.hash("admin", 10), // Hash the default password
                role: "admin" // Assign admin role
            });

            // Save the new admin user to the database
            await newAdmin.save();
            console.log("Admin account created successfully");
        } else {
            console.log("Admin already exists");
        }
    } catch (error) {
        // Corrected typo: 'messgae' → 'message'
        console.error(error.message);
    }
}

// Export the function to be used on server startup
module.exports = createAdminAccount;