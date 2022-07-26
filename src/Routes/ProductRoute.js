const express = require("express");
const {
  AddProduct,
  filterProducts,
  CategoryProducts,
} = require("../Controllers/ProductController");
const router = express.Router();

router.post("/addProduct", AddProduct);
router.post("/filterProducts", filterProducts);
router.post("/categoryProducts", CategoryProducts);

module.exports = router;
