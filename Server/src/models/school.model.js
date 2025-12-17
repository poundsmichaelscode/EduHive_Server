const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
  },
  { timestamps: true }
);


module.exports =
  mongoose.models.School || mongoose.model("School", schoolSchema);
