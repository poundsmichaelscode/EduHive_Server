const School = require("../models/school.model");

exports.createSchool = async (req, res) => {
  try {
    const data = await School.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getSchools = async (req, res) => {
  try {
    const data = await School.find();
    res.json(data);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getSchoolById = async (req, res) => {
  try {
    const data = await School.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "School not found" });
    res.json(data);
  } catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateSchool = async (req, res) => {
  try {
    const data = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteSchool = async (req, res) => {
  try {
    await School.findByIdAndDelete(req.params.id);
    res.json({ message: "School removed" });
  } catch (err) { res.status(400).json({ message: err.message }); }
};
