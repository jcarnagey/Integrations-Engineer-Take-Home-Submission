const User = require('../models/user.models');
const userService = require('../services/signup');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await userService.createEncryptedUser(userData);
        res.status(200).json({ user: user, message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({ messgae: "User not found" });
        }

        const updatedUser = await User.findById(id);
        res.status(200).json({ updatedUser });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ messgae: "User deleted successfully"});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};