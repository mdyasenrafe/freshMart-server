const FavoriteModel = require("../Models/FavoriteModel");

exports.AddFavorite = (req, res) => {
  FavoriteModel.create(req.body, (err, result) => {
    if (err) {
      res.status(200).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        message: "Successfully added to favorite",
        data: result,
      });
    }
  });
};
exports.GetFavorite = (req, res) => {
  const userId = req.body.userId;
  FavoriteModel.find({ userId: userId }, (err, result) => {
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

exports.deleteFavorite = (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  FavoriteModel.deleteOne(
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
