const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  parentName: String,
  parentPhone: String
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
