const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/school.controller");

router.post("/", protect, authorize("admin"), controller.createSchool);
router.get("/", protect, authorize("admin"), controller.getSchools);
router.get("/:id", protect, authorize("admin"), controller.getSchoolById);
router.put("/:id", protect, authorize("admin"), controller.updateSchool);
router.delete("/:id", protect, authorize("admin"), controller.deleteSchool);

module.exports = router;
