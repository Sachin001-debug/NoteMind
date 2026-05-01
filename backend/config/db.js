import mongoose from "mongoose";

const conectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected!!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};

export default conectDb;