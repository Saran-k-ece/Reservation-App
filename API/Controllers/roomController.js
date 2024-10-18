const Room = require('../Models/roomModel')
const Hotel =require('../Models/hotelModel')

//CREATE ROOM
const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      console.log("Room created:", savedRoom);
  
      try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
          hotelId,
          { $push: { rooms: savedRoom._id } },
          { new: true }
        );
        console.log("Hotel updated:", updatedHotel);
  
        res.status(200).json(savedRoom);
      } catch (err) {
        console.error("Error updating hotel:", err);
        next(err);
      }
    } catch (err) {
      console.error("Error saving room:", err);
      next(err);
    }
  };
  
  

//UPDATE
const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } 
        );
        
        if (!updatedRoom) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.status(200).json({ message: "Room is updated", updatedRoom });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};


//DELETE
const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        // Delete the room by ID
        await Room.findByIdAndDelete(req.params.id);

        // Remove the room from the associated hotel's rooms array
        await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });

        // Respond with a success message
        res.status(200).json({ message: "Room has been deleted" });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};

//GET
const getRoom = async (req, res, next) => {
    try {
        const particularRoom = await Room.findById(req.params.id);
        
        if (!particularRoom) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.status(200).json({ message: "Room is found", particularRoom });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};


//GET ALL
const getAllroom = async (req, res, next) => {
    try {
        const allRoom = await Hotel.find();
        
        if (!allRoom) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.status(200).json({ message: "Rooms are found", allRoom });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};



module.exports={createRoom,updateRoom,deleteRoom,getRoom,getAllroom}  