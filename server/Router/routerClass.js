import express from "express";
import { createClass, deleteClass, getClass, getClassId, updateClass } from "../Controller/ClassController.js";

const routerClass = express.Router();
routerClass.post("/create",createClass);
routerClass.get("/",getClass);
routerClass.get("/:id",getClassId);
routerClass.put("/edit/:id",updateClass);
routerClass.delete("/delete/:id",deleteClass);
export default routerClass;