const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
    topic: { type: String, required: true },
    date: { type: Date, default: Date.now },
    notes: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Consultation", consultationSchema);
