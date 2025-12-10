const Attendance = require("../models/Attendance.model");

exports.createAttendance = async (req, res) => {
  try {
    const data = await Attendance.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getAttendance = async (req, res) => {
  try {
    const data = await Attendance.find()
      .populate("student")
      .populate("class");
    res.json(data);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getAttendanceById = async (req, res) => {
  try {
    const data = await Attendance.findById(req.params.id)
      .populate("student")
      .populate("class");

    if (!data) return res.status(404).json({ message: "Record not found" });
    res.json(data);
  } catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateAttendance = async (req, res) => {
  try {
    const data = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: "Record removed" });
  } catch (err) { res.status(400).json({ message: err.message }); }
};
