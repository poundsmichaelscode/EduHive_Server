require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// import routes (add later) Thia willl be added later
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/students', require('./src/routes/student.routes'));
// ...and every other routewii be  imported here

// Error handling middleware

const errorHandler = require("./src/middleware/errorMiddleware");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));