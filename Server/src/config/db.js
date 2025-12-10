// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("MongoDB Error:", err));

// app.listen(5000, () => console.log("Server running on port 5000"));

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//MONGO CONNECTION 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));
