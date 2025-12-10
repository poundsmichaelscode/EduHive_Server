
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  amount: Number,
  term: String,
  status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  reference: String
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
