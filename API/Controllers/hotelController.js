const Hotel = require('../Models/hotelModel');


//CREATE
const newHotel = async (req, res, next) => {
    const { name, type, city, address, distances, title, description, cheapestPrice } = req.body;

    if (!name || !type || !city || !address || !distances || !title || !description || !cheapestPrice) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }

    try {
        const newHotel = await Hotel.create({
            name,
            type,
            city,
            address,
            distances,
            title,
            description,
            cheapestPrice
        });

        res.status(200).json({ message:"The Hotel Created",newHotel });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};

//UPDATE
const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } 
        );
        
        if (!updatedHotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        res.status(200).json({ message: "Hotel is updated", updatedHotel });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};


//DELETE
const deleteHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
        
        if (!updatedHotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        res.status(200).json({ message: "Hotel is deleted" });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};

//GET
const getHotel = async (req, res, next) => {
    try {
        const particularHotel = await Hotel.findById(req.params.id);
        
        if (!particularHotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        res.status(200).json({ message: "Hotel is found", particularHotel });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};


//GET ALL
const getAllHotel = async (req, res, next) => {
    try {
        const allHotel = await Hotel.find();
        
        if (!allHotel) {
            return res.status(404).json({ message: "Hotels not found" });
        }

        res.status(200).json({ message: "Hotels are found", allHotel });
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
};


module.exports = { newHotel,updateHotel,deleteHotel,getHotel,getAllHotel };
  