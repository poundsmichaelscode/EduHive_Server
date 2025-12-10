
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  gender: String,
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  subjectIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  phone: String
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
