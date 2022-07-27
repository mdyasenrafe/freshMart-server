const express = require("express");
const {
  AddCart,
  GetCart,
  updateCart,
} = require("../Controllers/CartController");

const router = express.Router();

router.post("/addCart", AddCart);
router.post("/getCart", GetCart);
router.post("/update", updateCart);

module.exports = router;
