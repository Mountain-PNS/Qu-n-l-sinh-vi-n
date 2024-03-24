import mongoose from "mongoose";
const ClassRoom = new mongoose.Schema({
  classId: {
    type: String,
    required: true,
  }, // mã lớp
  className: {
    type: String,
    required: true,
  }, //tên lớp
  subjectId: {
    type: String,
    required: true,
  }, // mã môn học 
  teacherId: {
    type: String,
    required: true,
  }, // mã giáo viên
  teacherName: {
    type: String,
    required: true,
  }, // tên giáo viên
  studentList: [
    {
      studentId: String,
      studentName: String,
    },
  ], // danh sách sinh viên

  day: {
    type: String,
    required: true,
  }, // ngày học trong tuần (2, 4, 6, 3, 5, 7)
  periods: {
    type: String,
    required: true,
    enum: [
      "ca 1 : 7:30-9:30",
      "ca 2 : 9:30-11:30",
      "ca 3 : 13:30-15:30",
      "ca 4 : 15:30-17:30",
      "ca 5 : 17:30-29:30",
    ],
  },
  room: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ClassRoom", ClassRoom);
