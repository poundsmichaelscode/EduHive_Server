// src/models/student.model.js
const mongoose = require('mongoose');

const GuardianSchema = new mongoose.Schema({
  name: { type: String },
  relation: { type: String },
  phone: { type: String },
  email: { type: String }
}, { _id: false });

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  middleName: { type: String, trim: true },
  lastName: { type: String, required: true, trim: true },

  admissionNo: { type: String, index: true, unique: true, sparse: true },
  registrationNo: { type: String, index: true, unique: true, sparse: true }, // optional alt id

  email: { type: String, lowercase: true, trim: true, index: true, sparse: true },
  phone: { type: String, trim: true },

  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['male', 'female', 'other'] },

  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },

  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  section: { type: String },

  guardian: GuardianSchema,
  emergencyContact: {
    name: String,
    phone: String,
    relation: String
  },

  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },

  photo: { type: String }, // url to uploaded photo

  enrollmentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'inactive', 'suspended', 'graduated'], default: 'active' },

  metadata: { type: Object } // free-form extra data
}, {
  timestamps: true
});

// Virtual for full name
StudentSchema.virtual('fullName').get(function () {
  return `${this.firstName}${this.middleName ? ' ' + this.middleName : ''} ${this.lastName}`.trim();
});

// Indexes to help queries
StudentSchema.index({ school: 1, admissionNo: 1 });
StudentSchema.index({ school: 1, lastName: 1, firstName: 1 });

// Export model
module.exports = mongoose.model('Student', StudentSchema);
