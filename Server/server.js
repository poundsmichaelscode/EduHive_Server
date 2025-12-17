require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// import routes 
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/students', require('./src/routes/student.routes'));
app.use("/api/teachers", require("./src/routes/teacher.routes"));
app.use("/api/schools", require("./src/routes/school.routes"));
app.use("/api/classes", require("./src/routes/class.routes"));
app.use("/api/subjects", require("./src/routes/subject.routes"));
app.use("/api/attendance", require("./src/routes/attendance.routes"));
app.use("/api/records", require("./src/routes/record.routes"));
app.use("/api/payments", require("./src/routes/payment.routes"));
app.use("/api/files", require("./src/routes/file.routes"));
app.use("/api/consultations", require("./src/routes/consultation.routes"));

// Error handling middleware

const errorHandler = require("./src/middleware/errorMiddleware");
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));