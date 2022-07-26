require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const PaymentModel = require("../Models/PaymentModel");
const CartModel = require("../Models/CartModel");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// random id generate

exports.cratePaymentIntent = async (req, res) => {
  try {
    const { totalAmount, name, email } = req.body;
    if (!name) return res.status(400).json({ message: "Please enter a name" });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100),
      currency: "USD",
      payment_method_types: ["card"],
      metadata: { name, email },
    });
    let hashUid = await bcrypt?.hash(uuidv4(), 10);

    const clientSecret = paymentIntent.client_secret;
    res.json({
      message: "Payment initiated",
      clientSecret: clientSecret,
      uuid: hashUid,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.paymentAdd = async (req, res) => {
  req.body["status"] = "payment sucess";
  const products = req.body.products;
  const id = req.body.userId;
  for (const product of products) {
    product["productStatus"] = "payment sucess";
  }
  PaymentModel.create(req.body, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err.message });
    } else {
      CartModel.deleteMany({ userId: id }, (err, item) => {
        if (err) {
          res.status(500).json({ error: true, message: err.message });
        } else {
          if (item.deletedCount === 0) {
            res.status(200).json({ error: true, message: "Cart is empty" });
          } else {
            res
              .status(200)
              .json({ error: false, message: "Payment added", data: data });
          }
        }
      });
    }
  });
};

exports.paymentFail = async (req, res) => {
  req.body["status"] = "payment failed";
  const products = req.body.products;
  for (const product of products) {
    product["productStatus"] = "payment failed";
  }
  PaymentModel.create(req.body, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err.message });
    } else {
      res
        .status(200)
        .json({ error: false, message: "Payment added", data: data });
    }
  });
};
exports.paymentProcess = async (req, res) => {
  req.body["status"] = "payment processing";
  const products = req.body.products;
  for (const product of products) {
    product["productStatus"] = "payment processing";
  }
  PaymentModel.create(req.body, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err.message });
    } else {
      res
        .status(200)
        .json({ error: false, message: "Payment added", data: data });
    }
  });
};

exports.getPayment = async (req, res) => {
  PaymentModel.find({ userId: req.body?.userId }, (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err.message });
    } else {
      res
        .status(200)
        .json({ error: false, message: "data fetch succesfully", data: data });
    }
  });
};
//  sucess payment bot after 30 min payment status change to sucess

exports.paymentSucessBot = async (req, res) => {
  PaymentModel.find((err, data) => {
    console.log(data);
    if (err) {
      res.status(200).json({ error: true, message: err.message });
    } else {
      for (const product of data) {
        if (product?.createdAt) {
          var diff = Math.abs(new Date(product?.createdAt) - new Date());
          var minutes = Math.floor(diff / 1000 / 60);
          console.log(product?._id, minutes);
          // check 30 min
          if (data.status != "payment failed" && minutes > 30) {
            PaymentModel.updateOne(
              { _id: product?._id },
              { $set: { status: "Delivered" } },
              (err, data) => {
                console.log(data);
              }
            );
          } else {
          }
        }
      }
      res.status(200).json({
        error: false,
        message: "thank you for your payment",
      });
    }
  });
};
