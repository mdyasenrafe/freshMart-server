const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
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
});

const FavoriteModel = mongoose.model("favorite", FavoriteSchema);
module.exports = FavoriteModel;
