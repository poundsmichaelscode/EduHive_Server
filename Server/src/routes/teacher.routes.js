const express = require("express");
const router = express.Router();
const controller = require("../controllers/teacher.controller");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", protect, authorize("admin"), controller.createTeacher);
router.get("/", protect, authorize("admin"), controller.getTeachers);
router.get("/:id", protect, authorize("admin"), controller.getTeacher);
router.put("/:id", protect, authorize("admin"), controller.updateTeacher);
router.delete("/:id", protect, authorize("admin"), controller.deleteTeacher);

module.exports = router;
