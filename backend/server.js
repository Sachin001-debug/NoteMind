import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import conectDb from "./config/db.js";
import chatRouter from "./routes/chatRoute.js";

dotenv.config();
conectDb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', chatRouter)

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);