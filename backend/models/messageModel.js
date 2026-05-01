import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  role: String, 
  content: String,
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);