// Import the jsonwebtoken library for verifying JWTs
const jwt = require('jsonwebtoken');

// Import the secret key used for signing/verifying tokens
const secretKey = require('../configuration/jwtConfig');

// Middleware to authenticate requests using a JWT
function authenticateToken(req, res, next) {
    // Get the Authorization header from the request
    const authHeader = req.header("Authorization");

    // If the header is missing, reject the request
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: Missing token!" });
    }

    // Split the header into "Bearer" and the actual token
    const [bearer, token] = authHeader.split(" ");

    // Validate the format of the header
    if (bearer !== "Bearer" || !token) {
        return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token format" });
    }

    // Verify the token using the secret key
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }

        // If valid, attach user info to the request object and continue
        req.user = user;
        next();
    });
}

// Utility function to verify a token directly
function verifyToken(token) {
    return jwt.verify(token, secretKey);
}

// Export both functions
module.exports = { authenticateToken, verifyToken };