
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: String,
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
