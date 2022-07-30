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

const filterProducts = (req, res, filter) => {
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
};
const CategoryProducts = (req, res, category) => {
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
};

exports.filter = async (req, res) => {
  const filter = req.body.filter;
  const category = req.body.category;

  if (filter) {
    if (filter === "") {
      allProducts(req, res);
    } else if (filter) {
      filterProducts(req, res, filter);
    }
  } else if (category) {
    if (category == "") {
      allProducts(req, res);
    } else {
      CategoryProducts(req, res, category);
    }
  } else {
    allProducts(req, res);
  }
};
exports.getSingleProduct = (req, res, filter) => {
  ProductsModel.findOne({ _id: req?.body?.id }, (err, data) => {
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

// exports.CategoryProducts = async (req, res) => {
//   const category = req.body.category;
//   if (!category) {
//     allProducts(req, res);
//   } else {
//     ProductsModel.find({ category: category }, (err, data) => {
//       if (err) {
//         res.status(200).json({ error: true, message: err });
//       } else {
//         res.status(200).json({
//           error: false,
//           message: "data fetch successfully",
//           count: data.length,
//           data: data,
//         });
//       }
//     });
//   }
// };
