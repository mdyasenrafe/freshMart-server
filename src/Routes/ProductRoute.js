const express = require("express");
const {
  AddProduct,
  getProducts,
  filterProducts,
} = require("../Controllers/ProductController");
const router = express.Router();

router.post("/addProduct", AddProduct);
router.post("/getProducts", getProducts);
router.post("/filterProducts", filterProducts);

module.exports = router;
