const jwt = require('jsonwebtoken');

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token; 

    if (!token) {
        return res.status(401).json({ message: "You are not authorized" });
    } 

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token is invalid!" });
        }
        req.user = user; // Attach user information to request
        next();
    });
};

// Middleware to verify if the user is authorized to access their own data
const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        // Allow users to access their own data or admins to access any user
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json({ message: "You are not authorized to access this resource" });
        }
    });
};

// Middleware to verify if the user is an admin
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => { // Call verifyToken to check for a valid token
        if (req.user.isAdmin) {
            next(); // If the user is an admin, proceed
        } else {
            return res.status(403).json({ message: "You are not allowed to perform this action!" });
        }
    });
};  

// Middleware to verify if the user is an admin or their own profile
const verifyAdminOrSelf = (req, res, next) => {
    verifyToken(req, res, () => {
        // Allow admin to access any user or user to access their own data
        if (req.user.isAdmin || req.user.id === req.params.id) {
            next();
        } else {
            return res.status(403).json({ message: "You are not authorized to perform this action" });
        }
    });
};   
   
module.exports = { verifyToken, verifyUser, verifyAdmin, verifyAdminOrSelf };
