const Consultation = require("../models/consultation.model");

exports.createConsultation = async (req, res) => {
  try {
    const data = await Consultation.create(req.body);
    res.status(201).json(data);
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getConsultations = async (req, res) => {
  try {
    const data = await Consultation.find()
      .populate("student")
      .populate("teacher");
    res.json(data);
  }
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getConsultationById = async (req, res) => {
  try {
    const data = await Consultation.findById(req.params.id)
      .populate("student")
      .populate("teacher");
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updateConsultation = async (req, res) => {
  try {
    const data = await Consultation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteConsultation = async (req, res) => {
  try {
    await Consultation.findByIdAndDelete(req.params.id);
    res.json({ message: "Consultation deleted" });
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};
