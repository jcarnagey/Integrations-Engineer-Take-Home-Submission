// Import the authentication service module
const authService = require('../services/login');

// Handles user login
async function login(req, res) {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Attempt to log in and retrieve a token from the auth service
        const token = await authService.login(email, password);

        // Respond with the generated token
        res.json({ token: token });
    } catch (error) {
        // If login fails, respond with a 401 Unauthorized status and message
        res.status(401).json({ message: "Invalid credentials" });
    }
}

// Handles refreshing an expired or expiring token
async function refreshToken(req, res) {
    try {
        // Extract the current token from the request body
        const { token } = req.body;

        // Attempt to refresh the token via the auth service
        const newToken = await authService.refreshToken(token);

        // Respond with the newly generated token
        res.json({ newToken: newToken });
    } catch (error) {
        // If token refresh fails, respond with a 401 Unauthorized status and message
        res.status(401).json({ message: "Invalid Token" });
    }
}

// Export the controller functions to be used in route definitions
module.exports = {
    login,
    refreshToken
}