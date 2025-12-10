const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", subjectSchema);
