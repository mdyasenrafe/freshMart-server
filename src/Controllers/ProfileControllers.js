const ProfileModel = require("../Models/ProfileModel");

exports.getProfile = async (req, res) => {
  ProfileModel.findOne({ email: req.body.email }, async (err, data) => {
    if (err) {
      res.status(200).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "data fetch successfully",
        data: data,
      });
    }
  });
};

exports.EditProfile = async (req, res) => {
  const filter = { email: req.body.email };
  const options = { upsert: true };
  const updateDoc = { $set: req.body };
  const result = await ProfileModel.updateOne(filter, updateDoc, options);
  res.json({ error: false, data: result });
};
