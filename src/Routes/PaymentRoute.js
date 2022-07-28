const express = require("express");

const { cratePaymentIntent } = require("../Controllers/PaymentController");

const router = express.Router();

router.post("/pay", cratePaymentIntent);

module.exports = router;
