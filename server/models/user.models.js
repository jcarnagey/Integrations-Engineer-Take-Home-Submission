// Import the Mongoose library for MongoDB object modeling
const mongoose = require("mongoose");

// Define a schema for the User model
const UserSchema = new mongoose.Schema(
    {
        // User's first name
        first_name: String,

        // User's last name
        last_name: String,

        // User's email address
        email: String,

        // Hashed password for authentication
        password: String,

        // Role of the user in the system (either "admin" or "customer")
        role: {
            type: String,               // Role must be a string
            enum: ["admin", "customer"],// Allowed values for role
            default: "customer"         // Default role if none is specified
        }
    },
    {
        // Automatically add createdAt and updatedAt timestamps
        timestamps: true,
    },
);

// Create a Mongoose model from the schema and name it 'User'
const User = mongoose.model("User", UserSchema);

// Export the User model so it can be used in other parts of the app
module.exports = User;