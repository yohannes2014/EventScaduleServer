import { Router } from "express";
import authRoute from "./authRoute.js";
import eventRoute from "./eventsRoute.js";

const allRoute = Router();

allRoute.use('/auth',authRoute);

allRoute.use('/events',eventRoute);



export default allRoute;