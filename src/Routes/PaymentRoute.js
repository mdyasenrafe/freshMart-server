const express = require("express");

const {
  cratePaymentIntent,
  paymentAdd,
} = require("../Controllers/PaymentController");

const router = express.Router();

router.post("/pay", cratePaymentIntent);
router.post("/add", paymentAdd);

module.exports = router;
