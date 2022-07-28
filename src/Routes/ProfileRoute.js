const express = require("express");
const {
  EditProfile,
  getProfile,
} = require("../Controllers/ProfileControllers");
const router = express.Router();

router.post("/update", EditProfile);
router.post("/get", getProfile);

module.exports = router;
