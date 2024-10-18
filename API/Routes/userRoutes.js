const express = require('express');
const {
    register,
    login,
    updateUser,
    deleteUser,
    getUser,
    getAllUser  
} = require('../Controllers/userController');
const { verifyToken, verifyUser, verifyAdmin, verifyAdminOrSelf } = require('../utils/verifyTokens'); 

const router = express.Router();

// User Routes

// Public route for user registration
router.post('/register', register);   

// Public route for user login
router.post('/login', login); 

// Public route for user login
router.get('/:id', verifyToken, getUser); 

// Only admin can access all users
router.get('/', verifyToken, verifyAdmin, getAllUser); 

// Update user information - allow users to update their own data or admins to update any user's data
router.put('/:id', verifyToken, verifyAdminOrSelf, updateUser); // Admin or user can update data

// Delete user -  admin or user can delete user accounts
router.delete('/:id', verifyToken, verifyAdminOrSelf, deleteUser); 

module.exports = router;
