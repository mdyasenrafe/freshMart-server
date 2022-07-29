const CartModel = require("../Models/CartModel");
const PaymentModel = require("../Models/PaymentModel");

exports.getHistory = (req, res) => {
  const userId = req.body.userId;
  CartModel.find({ userId: userId }, (err, result) => {
    if (err) {
      res.status(200).json({
        error: true,
        message: err,
      });
    } else {
      PaymentModel.find({ userId: userId }, (err, payment) => {
        if (err) {
          res.status(200).json({
            error: true,
            message: err,
          });
        } else {
          let uniqueItem = {
            userName: "",
            userEmail: "",
            userId: "",
            products: [],
          };
          for (const item of result) {
            for (const pay of payment) {
              if (item.userId == pay.userId) {
                console.log("object");
                uniqueItem["userName"] = item.userName;
                uniqueItem["userEmail"] = item.userEmail;
                uniqueItem["userId"] = item.userId;
                console.log(pay, item);
              }
            }
          }

          res.status(200).json({
            error: false,
            message: "Successfully fetched cart",
            data: uniqueItem,
          });
        }
      });
    }
  });
};
