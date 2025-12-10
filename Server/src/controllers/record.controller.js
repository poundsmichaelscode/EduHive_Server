const Record = require("../models/record.model");

exports.createRecord = async (req, res) => {
  try { 
    const data = await Record.create(req.body);
    res.status(201).json(data);
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getRecords = async (req, res) => {
  try { 
    const data = await Record.find().populate("student");
    res.json(data);
  }
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getRecordById = async (req, res) => {
  try {
    const data = await Record.findById(req.params.id).populate("student");
    if (!data) return res.status(404).json({ message: "Record not found" });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateRecord = async (req, res) => {
  try {
    const data = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Record removed" });
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};
