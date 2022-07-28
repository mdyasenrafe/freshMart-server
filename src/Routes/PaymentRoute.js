const express = require("express");

const { cratePaymentIntent } = require("../Controllers/PaymentController");

const router = express.Router();

router.post("/create-payment-intent", cratePaymentIntent);

module.exports = router;
