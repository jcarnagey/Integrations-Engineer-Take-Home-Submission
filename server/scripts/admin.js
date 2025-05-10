const User = require('../models/user.models');
const bcrypt = require('bcrypt');

async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({ email: "admin@test.com"});
        if(!existingAdmin){
            const newAdmin = new User({
                email: "admin@test.com",
                first_name: "Admin",
                last_name: "Test",
                password: await bcrypt.hash("admin", 10),
                role: "admin"
            })
            await newAdmin.save();
            console.log("Admin account created successfully")
        } else {
            console.log("Admin already exists")
        }
    } catch (error) {
      console.error(error.messgae);  
    } 
}

module.exports = createAdminAccount;