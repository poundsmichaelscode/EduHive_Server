const Payment = require("../models/payment.model");

exports.createPayment = async (req, res) => {
  try {
    const data = await Payment.create(req.body);
    res.status(201).json(data);
  } 
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getPayments = async (req, res) => {
  try {
    const data = await Payment.find().populate("student");
    res.json(data);
  }
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getPaymentById = async (req, res) => {
  try {
    const data = await Payment.findById(req.params.id).populate("student");
    if (!data) return res.status(404).json({ message: "Payment not found" });
    res.json(data);
  }
  catch (err) { res.status(400).json({ message: "Invalid ID" }); }
};

exports.updatePayment = async (req, res) => {
  try {
    const data = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } 
  catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deletePayment = async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ message: "Payment removed" });
  }
  catch (err) { res.status(400).json({ message: err.message }); }
};
