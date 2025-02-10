import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import allRoute from './src/routes/allRoutes.js';

// envaroment variable
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
 /*  , */
  origin: "https://eventscheduler-2ksp.onrender.com",
  credentials: true,
}));


// Routes
app.use('/api/', allRoute);



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
