const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.models.js');
const userRoute = require('./routes/user.route.js');
const app = express();
const cors = require('cors');
const signupRoute = require('./routes/signup.js');
const bodyParser = require('body-parser');
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use('/api/users', userRoute);
app.use('/users', signupRoute);

app.get('/', (req, res) => {
    res.send('Hello new from Node API')
});

mongoose
    .connect("mongodb+srv://johncarnagey14:kPt5plbATVpp9jct@nodedb.xz4kzie.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeDB")
    .then(() => {
        console.log("Connected to the database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    })
    .catch(() => {
        console.log("Connection failed")
    });
