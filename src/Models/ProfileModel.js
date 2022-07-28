const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  country: {
    type: String,
    default: "Bangladesh",
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },

  photoUrl: {
    type: String,
    default: "https://i.ibb.co/MGMchh7/925px-Unknown-person.jpg",
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const ProfileModel = mongoose.model("profile", ProfileSchema);
module.exports = ProfileModel;
