import Students from "../Model/Students.js";
import { StudentValidate } from "../validations/Validations.js";

export const createStudent = async (req, res) => {
  try {
    const {error} = StudentValidate.validate(req.body);
    console.log(error);
    if(error){
        return res.status(400).json({
           message : error.details[0].message
        })
    }
    const data = await Students.create(req.body);
    res.status(200).json({
      status: "OK",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getStudent = async (req, res) => {
  try {
    const data = await Students.find();
    res.status(200).json({
      status: "OK",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getStudentId = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Students.findById(id);
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
export const updateStudent = async (req, res) => {
    try {
      const id = req.params.id;
      const student = req.body
      const data = await Students.findByIdAndUpdate(id,student,{new:true});
      if (!data) {
        res.status(200).json({
          status: "ERROR",
          message: "Cập nhật thông tin sinh viên thất bại",
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
  export const deleteStudent = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Students.findByIdAndDelete(id);
      res.status(200).json({
        status: "OK",
        data: data,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };