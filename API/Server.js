const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./Config/config')
const cookieParser = require('cookie-parser')
const cors  = require('cors')


connectDB()

const app = express()

//Body Parser  
app.use(express.json())  

//CookieParser Middleware
app.use(cookieParser())    

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));


//Route middleware
app.use('/api/auth',require('./Routes/authRoutes'))
app.use('/api/user',require('./Routes/userRoutes'))
app.use('/api/hotels',require('./Routes/hotelRoutes'))
app.use('/api/rooms',require('./Routes/roomRoutes'))

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Something went wrong!",
    });
  });  
     
    
const port = process.env.PORT||5000

app.listen(port,()=>[
    console.log(`The server is running on port ${port}`)
])
