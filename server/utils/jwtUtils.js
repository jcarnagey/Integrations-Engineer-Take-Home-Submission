// Import the jsonwebtoken library for creating JWTs
const jwt = require('jsonwebtoken');

// Import the secret key used to sign tokens
const { secretKey } = require('../configuration/jwtConfig');

// Function to generate a JWT for a given user
function generateToken(user) {
    // Define the payload (data embedded in the token)
    const payload = {
        id: user._id,     // User ID
        email: user.email, // User email
        role: user.role    // User role (e.g., admin, user, etc.)
    };

    // Sign the token with the payload, secret key, and expiration time (1 hour)
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

// Export the generateToken function so it can be used in other files
module.exports = {
    generateToken
};