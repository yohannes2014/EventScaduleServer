import { Router } from "express";
import eventRouter from "./eventsRoute";
import userRouter from "./userRoutes";

const allRoutes = Router();

allRoutes.use(userRouter);
allRoutes.use(eventRouter);

export default allRoutes