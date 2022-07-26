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
  ProductsModel.create(req.body, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "data added successfully",
        data: data,
      });
    }
  });
};

exports.filterProducts = async (req, res) => {
  const filter = req.body.filter;
  if (!filter) {
    allProducts(req, res);
  } else if (filter === "") {
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
exports.CategoryProducts = async (req, res) => {
  const category = req.body.category;
  if (!category) {
    allProducts(req, res);
  } else {
    ProductsModel.find({ category: category }, (err, data) => {
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
