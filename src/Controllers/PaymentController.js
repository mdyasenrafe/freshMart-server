const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.cratePaymentIntent = async (req, res) => {
  console.log(req.body);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.totalAmount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).json({
      error: false,
      message: "Successfully created payment intent",
      data: paymentIntent.client_secret,
    });
  } catch {
    res.status(200).json({
      error: true,
      message: err,
    });
  }
};
