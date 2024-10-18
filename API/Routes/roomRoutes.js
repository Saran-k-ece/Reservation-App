const express = require('express')
const router = express.Router()
const{updateRoom,deleteRoom,getRoom,createRoom,getAllroom} = require('../Controllers/roomController')
const {verifyAdmin} = require('../utils/verifyTokens')


//CREATE
router.post('/:hotelid', verifyAdmin, createRoom);

//UPDATE
router.put('/updateRoom/:hotelid/:id',verifyAdmin,updateRoom)

//DELETE
router.put('/deleteRoom/:hotelid/:id',verifyAdmin,deleteRoom)

//GET
router.get('/getRoom/:id',getRoom)

//GET ALL
router.get('/getAllRoom',getAllroom)  




module.exports = router; 