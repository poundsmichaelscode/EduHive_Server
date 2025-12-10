
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  title: String,
  code: String,
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
