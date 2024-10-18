const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Saran:ResApp@cluster0.phs54.mongodb.net/Reservation_App', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.error("MongoDb not connected", err.message);
    process.exit(1);
  }
};



module.exports = connectDB;