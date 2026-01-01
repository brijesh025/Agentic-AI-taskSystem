import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI )
    .then(() =>{ 
        console.log('MongoDB connected');
        app.listen(PORT, () => {console.log("server at http://localhost:3000" )})
        })
    .catch((err) => console.error('MongoDB connection error:', err));