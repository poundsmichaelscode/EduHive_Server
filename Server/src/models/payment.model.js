const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ["cash", "transfer", "card"], default: "cash" },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
