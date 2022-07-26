const ProductsModel = require("../Models/ProductModel");
const axios = require("axios");

exports.AddProduct = async (req, res) => {
  ProductsModel.create(req.body, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "created successfully",
        data: data,
      });
    }
  });
};
exports.getProducts = async (req, res) => {
  ProductsModelNew.find({}, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "data fetch successfully",
        data: data,
      });
    }
  });
};
exports.filterProducts = async (req, res) => {
  ProductsModel.find({ filter: req.body.filter }, (err, data) => {
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
