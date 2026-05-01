import express from "express";
import chatHandler from "../controller/chatController.js";

const chatRouter = express.Router();

chatRouter.post("/chat", chatHandler);

export default chatRouter;