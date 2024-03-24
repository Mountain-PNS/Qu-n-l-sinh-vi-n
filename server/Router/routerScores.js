import express from "express";
import { createScores, deleteScores, getScores, getScoresId, getScoresstudentId, updateScores } from "../Controller/ScoresController.js";

const routerScores = express.Router();
routerScores.post("/create",createScores);
routerScores.get("/",getScores);
routerScores.get("/:id",getScoresId);
routerScores.get("/student/?studentId",getScoresstudentId);
routerScores.put("/edit/:id",updateScores);
routerScores.delete("/delete/:id",deleteScores);
export default routerScores;