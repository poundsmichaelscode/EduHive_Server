const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", recordSchema);
