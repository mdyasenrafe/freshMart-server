const CartModel = require("../Models/CartModel");

exports.AddCart = (req, res) => {
  CartModel.create(req.body, (err, result) => {
    if (err) {
      res.status(200).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        message: "Successfully added to cart",
        data: result,
      });
    }
  });
};
exports.GetCart = (req, res) => {
  const userId = req.body.userId;
  CartModel.find({ userId: userId }, (err, result) => {
    if (err) {
      res.status(200).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        message: "Successfully fetched cart",
        data: result,
      });
    }
  });
};

exports.updateCart = (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const quantity = req.body.productQuantity;
  CartModel.updateOne(
    { userId: userId, productId: productId },
    { $set: { productQuantity: quantity } },
    (err, result) => {
      if (err) {
        res.status(200).json({
          error: true,
          message: err,
        });
      } else {
        res.status(200).json({
          error: false,
          message: "Successfully updated cart",
          data: result,
        });
      }
    }
  );
};

exports.deleteCart = (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  CartModel.deleteOne(
    { userId: userId, productId: productId },
    (err, result) => {
      if (err) {
        res.status(200).json({
          error: true,
          message: err,
        });
      } else {
        res.status(200).json({
          error: false,
          message: "Successfully delete cart",
          data: result,
        });
      }
    }
  );
};
