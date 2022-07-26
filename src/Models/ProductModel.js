const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  photo: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  weight: {
    type: String,
    deflault: "1kg",
  },
  category: {
    type: String,
  },
  filter: {
    type: String,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const ProductsModel = mongoose.model("products", ProductSchema);
module.exports = ProductsModel;
