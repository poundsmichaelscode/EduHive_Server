// File student documentation
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  fileUrl: String,
  type: String
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
