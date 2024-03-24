import mongoose from "mongoose";
const Lecturers = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    lecturersID : {
        type: String,
        required: true,
    
    },
    email : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    subject : {
        type: String,
        required: true
    }

    
})
export default mongoose.model("Lecturers", Lecturers);