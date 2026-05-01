import Message from "../models/messageModel.js";
import axios from "axios";

const getAiresponse = async (message) => {
  try {
    const res = await axios.post(process.env.OLLAMA_URL, {
      model: "llama3",
      prompt: message,
      stream: false,
    });

    console.log("Ollama response:", res.data);

    return res.data.response || res.data.message?.content || "No response from AI";
  } catch (err) {
    console.log("Ollama error:", err.message);
    return "AI service failed (Ollama not responding)";
  }
};

const chatHandler = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Save user message
    await Message.create({
      role: "user",
      content: message,
    });

    // Get AI response
    const aiResponse = await getAiresponse(message);

    // Save AI message
    await Message.create({
      role: "assistant",
      content: aiResponse,
    });

    res.json({ response: aiResponse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default chatHandler;
