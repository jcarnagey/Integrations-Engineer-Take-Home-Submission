const User = require('../models/user.models');
const bcrypt = require('bcrypt');

async function createEncryptedUser(userData) {
    const { first_name, last_name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        role: "customer"
    });

    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createEncryptedUser };