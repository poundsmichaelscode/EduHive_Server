const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Only pass the connection string
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
