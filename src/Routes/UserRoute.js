const express = require("express");
const {
  signUpUser,
  getUser,
  allUsers,
} = require("../Controllers/UserController");

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/allUser", allUsers);
router.post("/signin", getUser);
router.post("/getUser", getUser);
// router.post("/signin", getUser);

module.exports = router;
