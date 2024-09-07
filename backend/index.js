import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/database.js';
dotenv.config({})
const app = express();

const PORT = process.env.PORT || 4500;

app.listen(PORT,()=>{
  connectDB();
  console.log(`server is running ${PORT}`)
})