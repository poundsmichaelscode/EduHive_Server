// Parent ↔ Teacher Meetings/enquries about consultations and school consultations


const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  topic: String,
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending' },
  date: Date,
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Consultation', consultationSchema);
