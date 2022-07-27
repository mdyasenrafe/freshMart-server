const express = require("express");
const {
  AddCart,
  GetCart,
  updateCart,
  deleteCart,
} = require("../Controllers/CartController");

const router = express.Router();

router.post("/addCart", AddCart);
router.post("/getCart", GetCart);
router.post("/update", updateCart);
router.post("/delete", deleteCart);

module.exports = router;
