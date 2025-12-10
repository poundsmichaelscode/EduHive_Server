const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    capacity: { type: Number, default: 30 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);
