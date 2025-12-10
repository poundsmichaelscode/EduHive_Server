const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/class.controller");

router.post("/", protect, authorize("admin"), controller.createClass);
router.get("/", protect, authorize("admin","teacher"), controller.getClasses);
router.get("/:id", protect, authorize("admin","teacher"), controller.getClassById);
router.put("/:id", protect, authorize("admin"), controller.updateClass);
router.delete("/:id", protect, authorize("admin"), controller.deleteClass);

module.exports = router;
