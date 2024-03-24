import express from "express";
import { createStudent, deleteStudent, getStudent, getStudentId, updateStudent,  } from "../Controller/StudentController.js";
const routerStudent = express.Router();
routerStudent.post("/create",createStudent);
routerStudent.get("/",getStudent);
routerStudent.get("/:id",getStudentId);
routerStudent.put("/edit/:id",updateStudent);
routerStudent.delete("/delete/:id",deleteStudent);
export default routerStudent;