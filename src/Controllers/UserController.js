const bcrypt = require("bcrypt");
const UserModel = require("../Models/UserModel");

exports.signUpUser = async (req, res) => {
  let hashedPassword;
  if (req.body?.password === req.body?.password_repeat) {
    let newPassword = req.body.password.toString();
    hashedPassword = await bcrypt?.hash(newPassword, 10);
  }
  req.body["password"] = hashedPassword;
  req.body["password_repeat"] = hashedPassword;

  if (req.body.method == "google") {
    const filter = { email: req.body.email };
    const options = { upsert: true };
    const updateDoc = { $set: req.body };
    const result = await UserModel.updateOne(filter, updateDoc, options);
    res.json({ error: false, message: "successfully", data: result });
  } else {
    UserModel.create(req.body, async (err, data) => {
      if (err) {
        res.status(200).json({ error: true, message: err });
      } else {
        res.status(200).json({
          error: false,
          message: "created successfully",
          data: data,
        });
      }
    });
  }
};

exports.getUser = async (req, res) => {
  UserModel.findOne({ email: req?.body?.email }, async (err, item) => {
    if (item?.email) {
      res.status(200).json({
        error: false,
        data: item,
        message: "data fetch successfully",
      });
    } else {
      res.status(400).json({ error: true, message: "No User Found" });
    }
  });
};
exports.allUsers = async (req, res) => {
  UserModel.findOne({ email: req?.body?.email }, async (err, item) => {
    if (item?.role === "admin") {
      UserModel.find({}, async (err, data) => {
        if (err) {
          res.status(200).json({ error: true, message: err });
        } else {
          res.status(200).json({
            error: false,
            data: data,
            message: "data fetch successfully",
          });
        }
      });
    } else {
      res.status(400).json({ error: true, message: "Wrong Authentication" });
    }
  });
};
