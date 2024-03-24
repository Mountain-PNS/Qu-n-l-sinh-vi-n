import Scores from "../Model/Scores.js";
import { calculaterAverage } from "./calculaterAverage.js";

export const createScores = async (req, res) => {
  try {
    const {
      midtermScore,
      finalScore,
      assignmentScore,
      practicalScore,
      examScore,
    } = req.body;
    const average = calculaterAverage(
      practicalScore,
      examScore,
      assignmentScore,
      midtermScore,
      finalScore
    );
    req.body.average = average.toFixed(1);
    console.log(average.toFixed(2));
    const data = await Scores.create(req.body);

    // Tính điểm trung bình

    res.status(200).json({
      status: "OK",
      data: {
        ...data._doc,
        average: average,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getScores = async (req, res) => {
  try {
    const data = await Scores.find();
    res.status(200).json({
      status: "OK",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getScoresId = async (req, res) => {
  console.log(req.params);
  try {
    const id = req.params.id;
    const data = await Scores.findById(id);
    if (!data) {
      res.status(200).json({
        status: "ERROR",
        message: "Lấy thông tin sinh viên thất bại",
      });
    }
    res.status(200).json({
      status: "OK",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getScoresstudentId= async (req, res) => {
  try {
    const studentId = req.query.studentId;
    console.log(studentId);
    // const data = await Scores.findById(id);
    // if (!data) {
    //   res.status(200).json({
    //     status: "ERROR",
    //     message: "Lấy thông tin sinh viên thất bại",
    //   });
    // }
    // res.status(200).json({
    //   status: "OK",
    //   data: data,
    // });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const updateScores = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      midtermScore,
      finalScore,
      assignmentScore,
      practicalScore,
      examScore,
    } = req.body;
    const data = await Scores.findByIdAndUpdate(id, req.body, { new: true });
    if (!data) {
      res.status(200).json({
        status: "ERROR",
        message: "Cập nhật thông tin sinh viên thất bại",
      });
    }
    const average = calculaterAverage(
      practicalScore,
      examScore,
      assignmentScore,
      midtermScore,
      finalScore
    );
    res.status(200).json({
      data: {
        ...data._doc,
        average: average,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const deleteScores = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Scores.findByIdAndDelete(id);
    res.status(200).json({
      status: "OK",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
