import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Router/index.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// MongoDB connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MogoDB connection established "))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
