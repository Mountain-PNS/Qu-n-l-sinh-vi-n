import express from "express";
import { createSubject, deleteSubject, getSubject, getSubjectId, updateSubject } from "../Controller/SubjecControllert.js";
const routerSubject = express.Router();
routerSubject.post("/create",createSubject);
routerSubject.get("/",getSubject);
routerSubject.get("/:id",getSubjectId);
routerSubject.put("/edit/:id",updateSubject);
routerSubject.delete("/delete/:id",deleteSubject);
export default routerSubject;