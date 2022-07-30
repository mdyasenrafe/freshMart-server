const express = require("express");

const {
  cratePaymentIntent,
  paymentAdd,
  paymentProcess,
  paymentFail,
  getPayment,
  paymentSucessBot,
} = require("../Controllers/PaymentController");

const router = express.Router();

router.post("/pay", cratePaymentIntent);
router.post("/sucess", paymentAdd);
router.post("/fail", paymentFail);
router.post("/processing", paymentProcess);
router.post("/get", getPayment);
router.post("/success/bot", paymentSucessBot);

module.exports = router;
