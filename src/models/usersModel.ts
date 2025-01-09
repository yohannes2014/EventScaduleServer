import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    date: {
        type: String
    }

});

const userModel = mongoose.model('users', userSchema)

export default userModel;
