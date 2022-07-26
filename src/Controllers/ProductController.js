const ProductsModel = require("../Models/ProductModel");
const axios = require("axios");

const allProducts = async (req, res) => {
  ProductsModel.find({}, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "data fetch successfully",
        count: data.length,
        data: data,
      });
    }
  });
};

exports.AddProduct = async (req, res) => {
  allProducts(req, res);
};

exports.getProducts = async (req, res) => {};
exports.filterProducts = async (req, res) => {
  const filter = req.body.filter;
  if (!filter) {
    allProducts(req, res);
  } else {
    ProductsModel.find({ filter: filter }, (err, data) => {
      if (err) {
        res.status(200).json({ error: true, message: err });
      } else {
        res.status(200).json({
          error: false,
          message: "data fetch successfully",
          count: data.length,
          data: data,
        });
      }
    });
  }
};
