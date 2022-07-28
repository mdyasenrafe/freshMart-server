const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userId: {
    type: String,
  },
  totalAmount: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  status: {
    type: String,
  },
  paymentId: {
    type: String,
  },
  products: [
    {
      productId: {
        type: String,
      },
      productName: {
        type: String,
      },
      productPrice: {
        type: String,
      },
      productPhoto: {
        type: String,
      },
      productQuantity: {
        type: Number,
      },
      productStatus: {
        type: String,
      },
    },
  ],
});

const PaymentModel = mongoose.model("payment", PaymentSchema);
module.exports = PaymentModel;
