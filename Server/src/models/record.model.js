const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports =
  mongoose.models.Record || mongoose.model("Record", recordSchema);
