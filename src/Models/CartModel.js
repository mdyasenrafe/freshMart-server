const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userId: {
    type: String,
  },
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
  status: {
    type: String,
    default: "pending",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;
