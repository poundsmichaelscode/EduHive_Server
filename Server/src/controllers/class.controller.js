const Class = require("../models/class.model");

exports.createClass = async (req, res) => {
  try {
    const data = await Class.create(req.body);
    res.status(201).json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getClasses = async (req, res) => {
  try {
    const data = await Class.find().populate("teacher");
    res.json(data);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getClassById = async (req, res) => {
  try {
    const data = await Class.findById(req.params.id).populate("teacher");
    if (!data) return res.status(404).json({ message: "Class not found" });
    res.json(data);
  } catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateClass = async (req, res) => {
  try {
    const data = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteClass = async (req, res) => {
  try { 
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Class removed" }); 
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};
