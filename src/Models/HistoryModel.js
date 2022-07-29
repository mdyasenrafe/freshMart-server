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
      productStaus: {
        type: String,
      },
    },
  ],
  status: {
    type: String,
  },
});

const FavoriteModel = mongoose.model("favorite", FavoriteSchema);
module.exports = FavoriteModel;
