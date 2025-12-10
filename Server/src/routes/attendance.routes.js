const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/attendance.controller");

router.post("/", protect, authorize("admin","teacher"), controller.createAttendance);
router.get("/", protect, authorize("admin","teacher"), controller.getAttendance);
router.get("/:id", protect, authorize("admin","teacher"), controller.getAttendanceById);
router.put("/:id", protect, authorize("admin","teacher"), controller.updateAttendance);
router.delete("/:id", protect, authorize("admin"), controller.deleteAttendance);

module.exports = router;
