import mongoose from "mongoose";

 const Student = new mongoose.Schema( {
  studentId : {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone : {
    type: String,
    required: true,
  },
  gender : {
    type: String,
    required: true,
    enum : ["Nam","Nữ"]
  },
  dateOfBirth : {
    type: Date,
    required: true,
  },
  status : {
    type: String,
    enum : ["Đang học","Nghỉ học","Bảo lưu"],
    default : "Đang học"
  }
}, {
  timestamps: true,
});
export default mongoose.model("Students", Student);