const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");

// Protect first, then authorize roles
router.post("/", protect, authorize(["admin","teacher"]), studentController.createStudent);
router.get("/", protect, authorize(["admin","teacher"]), studentController.getStudents);
router.get("/:id", protect, authorize(["admin","teacher"]), studentController.getStudentById);
router.put("/:id", protect, authorize(["admin","teacher"]), studentController.updateStudent);
router.delete("/:id", protect, authorize(["admin"]), studentController.deleteStudent);

module.exports = router;
