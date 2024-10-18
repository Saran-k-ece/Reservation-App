const Admin = require('../Models/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// REGISTER
const register = async (req, res, next) => {
    try {
        // Check if the username or email already exists
        const existingAdmin = await Admin.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.email }
            ]  
        });
          
        if (existingAdmin) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new Admin({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: true 
        });

        await newUser.save();
        res.status(201).json({ message: "Admin user has been created successfully" });
    } catch (err) {
        next(err);
    }
};

// LOGIN
const login = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username });

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, admin.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Wrong password or username" });
        }
   
        // Generate token
        const token = jwt.sign({
            id: admin._id,
            isAdmin: admin.isAdmin 
        }, process.env.ACCESS_SECRET_TOKEN, {
            expiresIn: "2h"
        });

    
        const { password, isAdmin, ...otherDetails } = admin._doc;

        
        res.cookie("access_token", token, {
            httpOnly: true, // Prevent client-side access
          
        }).status(200).json({ message: "Login successful", ...otherDetails });
    } catch (err) {
        next(err);
    }
};

module.exports = { register, login };
