import mongoose from "mongoose";
const Subject = new mongoose.Schema({
    subjectId : {
        type: String,
        required: true
    },
    subjectName : {
        type: String,
        required: true
    },
    lesson : {
        type: Number,
        required: true
    },
    
})
export default mongoose.model("Subject", Subject);