const Teacher = require("../models/Teacher");

exports.createTeacher = async (req, res) => {
  try {
    const data = await Teacher.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getTeachers = async (req, res) => {
  try {
    const data = await Teacher.find();
    res.json(data);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getTeacherById = async (req, res) => {
  try {
    const data = await Teacher.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Teacher not found" });
    res.json(data);
  } catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateTeacher = async (req, res) => {
  try {
    const data = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher removed" });
  } catch (err) { res.status(400).json({ message: err.message }); }
};
