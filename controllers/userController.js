const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }

    // Hashed Pass
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
       username: username, email: email, password: hashedPass
    });
    if(user){
        res.status(201).json({_id: user.id, email: user.email});   
    }
    else{
        res.status(400);
        throw new Error("User data not valid");
    }
    res.json({message: "Registered successfully"});
});

const loginUser = asyncHandler(async (req, res) => {
    
});

const currentUser = asyncHandler(async (req, res) => {
    
});

module.exports = {registerUser, loginUser, currentUser};