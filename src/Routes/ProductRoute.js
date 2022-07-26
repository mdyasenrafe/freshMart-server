const express = require("express");
const {
  AddProduct,
  filter,
  CategoryProducts,
} = require("../Controllers/ProductController");
const router = express.Router();

router.post("/addProduct", AddProduct);
router.post("/filter", filter);
// router.post("/categoryProducts", CategoryProducts);

module.exports = router;
