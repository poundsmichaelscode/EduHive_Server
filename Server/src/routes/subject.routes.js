const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/subject.controller");

router.post("/", protect, authorize("admin"), controller.createSubject);
router.get("/", protect, authorize("admin","teacher"), controller.getSubjects);
router.get("/:id", protect, authorize("admin","teacher"), controller.getSubjectById);
router.put("/:id", protect, authorize("admin"), controller.updateSubject);
router.delete("/:id", protect, authorize("admin"), controller.deleteSubject);

module.exports = router;
