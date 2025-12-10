const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/consultation.controller");

router.post("/", protect, authorize("admin","teacher"), controller.createConsultation);
router.get("/", protect, authorize("admin","teacher"), controller.getConsultations);
router.get("/:id", protect, authorize("admin","teacher"), controller.getConsultationById);
router.put("/:id", protect, authorize("admin","teacher"), controller.updateConsultation);
router.delete("/:id", protect, authorize("admin"), controller.deleteConsultation);

module.exports = router;
