const express = require("express");

const {
  cratePaymentIntent,
  paymentAdd,
  paymentProcess,
  paymentFail,
} = require("../Controllers/PaymentController");

const router = express.Router();

router.post("/pay", cratePaymentIntent);
router.post("/sucess", paymentAdd);
router.post("/fail", paymentFail);
router.post("/processing", paymentProcess);

module.exports = router;
