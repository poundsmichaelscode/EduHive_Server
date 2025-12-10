const File = require("../models/file.model");

exports.createFile = async (req, res) => {
  try {
    const data = await File.create(req.body);
    res.status(201).json(data);
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getFiles = async (req, res) => {
  try {
    const data = await File.find().populate("uploadedBy");
    res.json(data);
  } 
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getFileById = async (req, res) => {
  try {
    const data = await File.findById(req.params.id).populate("uploadedBy");
    if (!data) return res.status(404).json({ message: "File not found" });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateFile = async (req, res) => {
  try {
    const data = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteFile = async (req, res) => {
  try {
    await File.findByIdAndDelete(req.params.id);
    res.json({ message: "File deleted" });
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};
