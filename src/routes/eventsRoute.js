import { Router } from "express";
import { createEvent,  deleteEvent, getEvents, newMultipleEvents, protect, updateEvent } from "../controls/eventRoutes.js";

const eventRoute = Router();



// Create an event
eventRoute.post('/', protect, createEvent);

//Create multiple event
eventRoute.post('/multiple', protect, newMultipleEvents);

// Get user's events
eventRoute.get('/', protect, getEvents);

// Update an event
eventRoute.put('/:id', protect, updateEvent);

// Delete an event
eventRoute.delete('/:id', deleteEvent);



export default eventRoute
