import express from "express";
import { createLecturers, deleteLecturers, getLecturers, getLecturersId, updateLecturers } from "../Controller/LecturersController.js";
const routerLecturers = express.Router();
routerLecturers.post("/create",createLecturers);
routerLecturers.get("/",getLecturers);
routerLecturers.get("/:id",getLecturersId);
routerLecturers.put("/edit/:id",updateLecturers);
routerLecturers.delete("/delete/:id",deleteLecturers);
export default routerLecturers;