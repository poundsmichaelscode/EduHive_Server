const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const controller = require("../controllers/payment.controller");

router.post("/", protect, authorize("admin"), controller.createPayment);
router.get("/", protect, authorize("admin"), controller.getPayments);
router.get("/:id", protect, authorize("admin"), controller.getPaymentById);
router.put("/:id", protect, authorize("admin"), controller.updatePayment);
router.delete("/:id", protect, authorize("admin"), controller.deletePayment);

module.exports = router;
