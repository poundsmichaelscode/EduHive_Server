const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/teacher.controller");

router.post("/", protect, authorize("admin"), controller.createTeacher);
router.get("/", protect, authorize("admin","teacher"), controller.getTeachers);
router.get("/:id", protect, authorize("admin","teacher"), controller.getTeacherById);
router.put("/:id", protect, authorize("admin"), controller.updateTeacher);
router.delete("/:id", protect, authorize("admin"), controller.deleteTeacher);

module.exports = router;
