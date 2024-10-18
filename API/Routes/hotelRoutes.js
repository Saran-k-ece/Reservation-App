const express = require('express');
const router = express.Router();
const { newHotel, updateHotel, deleteHotel, getHotel, getAllHotel } = require('../Controllers/hotelController');
const { verifyAdmin, verifyAdminOrSelf } = require('../utils/verifyTokens');

// CREATE
router.post('/createHotel', verifyAdmin, newHotel);

// UPDATE
router.put('/updateHotel/:id', verifyAdminOrSelf, updateHotel);

// DELETE
router.delete('/deleteHotel/:id', verifyAdmin, deleteHotel); // Only admins can delete hotels

// GET
router.get('/getHotel/:id', getHotel);
  
// GET ALL
router.get('/getAllHotel', getAllHotel);

module.exports = router;
