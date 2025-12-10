const Subject = require("../models/subject.model");

exports.createSubject = async (req, res) => {
  try { 
    const data = await Subject.create(req.body);
    res.status(201).json(data); 
  } 
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getSubjects = async (req, res) => {
  try { 
    const data = await Subject.find().populate("teacher"); 
    res.json(data); 
  }
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getSubjectById = async (req, res) => {
  try { 
    const data = await Subject.findById(req.params.id).populate("teacher");
    if (!data) return res.status(404).json({ message: "Subject not found" });
    res.json(data);
  } 
  catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateSubject = async (req, res) => {
  try {
    const data = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } 
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteSubject = async (req, res) => {
  try { 
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject removed" }); 
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};
