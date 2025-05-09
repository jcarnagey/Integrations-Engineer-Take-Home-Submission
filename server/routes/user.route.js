const express = require('express');
const User = require('../models/user.models.js');
const router = express.Router();

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js');

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/register', createUser);

//update user
router.put('/:id', updateUser);

//delete user
router.delete('/:id', deleteUser);

module.exports = router;