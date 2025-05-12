// Import the built-in 'crypto' module for cryptographic operations
const crypto = require('crypto');

// Generate a 256-bit (32-byte) random secret key and convert it to a hexadecimal string
// This key can be used for encryption, signing tokens, or other secure operations
const secretKey = crypto.randomBytes(32).toString('hex');

// Export the generated secret key for use in other parts of the application
module.exports = {
    secretKey: secretKey
};