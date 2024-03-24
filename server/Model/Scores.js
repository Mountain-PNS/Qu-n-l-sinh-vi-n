import mongoose from "mongoose";
const Scores = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  subjectId: {
    type: Object,
    required: true,
  },
  practicalScore: {
    type: Number,
    required: true,
  }, // Điểm thực hành 10
  examScore: {
    type: Number,
    required: true,
  }, // Điểm thi 10
  assignmentScore: {
    type: Number,
    required: true,
  }, // Điểm bài tập 20
  midtermScore: {
    type: Number,
    required: true,
  }, // Điểm giữa kỳ 20
  finalScore: {
    type: Number,
    required: true,
  }, // Điểm cuối kỳ 40
  average: {
    type: Number
  }
});

export default mongoose.model("Scores", Scores);
