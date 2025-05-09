const express = require('express');
const userSignupController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', userSignupController.createUser);

module.exports = router;