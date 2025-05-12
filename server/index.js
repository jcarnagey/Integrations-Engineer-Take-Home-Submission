// Import required packages and modules
const express = require('express'); // Express web framework
const mongoose = require('mongoose'); // MongoDB ODM (Object Data Modeling)
const User = require('./models/user.models.js'); // Mongoose model for users
const userRoute = require('./routes/user.route.js'); // Routes for user-related operations
const signupRoute = require('./routes/signup.js'); // Route handler for user signup
const loginRoute = require('./routes/login.js'); // Route handler for user login
const app = express(); // Initialize express app
const cors = require('cors'); // Enable Cross-Origin Resource Sharing
const createAdminAccount = require('./scripts/admin.js'); // Script to create a default admin account
const bodyParser = require('body-parser'); // Middleware to parse request bodies

// Define CORS options to allow requests from the frontend
const corsOptions = {
    origin: ["http://localhost:5173"], // Only allow this origin
};

// Use CORS with defined options
app.use(cors(corsOptions));

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON using body-parser (redundant with express.json())

// Route handlers
app.use('/api/users', userRoute); // Mount user routes at /api/users
app.use('/users', signupRoute); // Mount signup route at /users
app.use('/auth', loginRoute); // Mount login route at /auth

// Endpoint to delete a user by ID
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id; // Extract user ID from URL params
    User.findByIdAndDelete({ _id: id }) // Delete the user from DB
        .then(res => res.json(res)) // Return deleted user info
        .catch(err => res.json(err)); // Handle errors
});

// Create an admin account when the server starts
createAdminAccount();

// Root route for health check or basic info
app.get('/', (req, res) => {
    res.send('Hello new from Node API');
});

// Connect to MongoDB database and start server
mongoose
    .connect("mongodb+srv://johncarnagey14:kPt5plbATVpp9jct@nodedb.xz4kzie.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeDB")
    .then(() => {
        console.log("Connected to the database");
        // Start the server after successful DB connection
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed"); // Log if DB connection fails
    });