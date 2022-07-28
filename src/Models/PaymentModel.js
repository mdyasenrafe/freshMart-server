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
        default: 1,
      },
    },
  ],
});

const PaymentModel = mongoose.model("payment", PaymentSchema);
module.exports = PaymentModel;
