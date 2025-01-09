import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import allRoutes from "./src/routes/allRoutes";
import { newUser } from "./src/types/types";
import mongoose from "mongoose";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', allRoutes);


// MongoDB connection 
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/eventschedule';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });



const port = process.env.PORT;


app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})

