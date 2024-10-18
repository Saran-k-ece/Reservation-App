const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distances: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,   
    },
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,  
        ref: "Room"  
    }], 
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false, 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);
