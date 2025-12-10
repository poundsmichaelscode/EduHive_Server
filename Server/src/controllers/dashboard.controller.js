// controllers/dashboard.controller.js
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const ClassModel = require('../models/Class');
const Attendance = require('../models/Attendance');
const Payment = require('../models/Payment');

exports.getStats = async (req, res) => {
  const schoolId = req.user.schoolId;
  const studentsCount = await Student.countDocuments({ schoolId });
  const teachersCount = await Teacher.countDocuments({ schoolId });
  const classesCount = await ClassModel.countDocuments({ schoolId });

  const today = new Date(); today.setHours(0,0,0,0);
  const totalAttendance = await Attendance.countDocuments({ schoolId, date: today });
  const presentAttendance = await Attendance.countDocuments({ schoolId, date: today, status: 'present' });

  const attendanceRate = totalAttendance ? (presentAttendance / totalAttendance) : 0;

  const paymentsThisMonth = await Payment.aggregate([
    { $match: { schoolId, date: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) } } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json({
    studentsCount,
    teachersCount,
    classesCount,
    attendanceRate,
    paymentsThisMonth: paymentsThisMonth[0]?.total || 0
  });
};
