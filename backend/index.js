import dotenv from 'dotenv'
import connectDB from './db/database.js';
import app from './app.js';
import cloudinary from 'cloudinary';
dotenv.config({})

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running ${PORT}`)
})