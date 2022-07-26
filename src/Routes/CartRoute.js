const express = require("express");
const { AddCart, GetCart } = require("../Controllers/CartController");

const router = express.Router();

router.post("/addCart", AddCart);
router.post("/getCart", GetCart);

module.exports = router;
