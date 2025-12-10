const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/file.controller");

router.post("/", protect, authorize("admin","teacher"), controller.createFile);
router.get("/", protect, authorize("admin","teacher"), controller.getFiles);
router.get("/:id", protect, authorize("admin","teacher"), controller.getFileById);
router.put("/:id", protect, authorize("admin","teacher"), controller.updateFile);
router.delete("/:id", protect, authorize("admin"), controller.deleteFile);

module.exports = router;
