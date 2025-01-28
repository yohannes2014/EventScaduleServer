import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel', required: true },
    
});

const userEvents = mongoose.model('Events', eventSchema);

export default userEvents;
