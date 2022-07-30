const express = require("express");
const {
  AddProduct,
  filter,
  CategoryProducts,
  getSingleProduct,
} = require("../Controllers/ProductController");
const router = express.Router();

router.post("/addProduct", AddProduct);
router.post("/filter", filter);
router.post("/get", getSingleProduct);

module.exports = router;
