const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/record.controller");

router.post("/", protect, authorize("admin","teacher"), controller.createRecord);
router.get("/", protect, authorize("admin","teacher"), controller.getRecords);
router.get("/:id", protect, authorize("admin","teacher"), controller.getRecordById);
router.put("/:id", protect, authorize("admin","teacher"), controller.updateRecord);
router.delete("/:id", protect, authorize("admin"), controller.deleteRecord);

module.exports = router;
