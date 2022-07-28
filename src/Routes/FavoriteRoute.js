const express = require("express");
const {
  AddFavorite,
  GetFavorite,
  deleteFavorite,
} = require("../Controllers/FavoriteController");

const router = express.Router();

router.post("/add", AddFavorite);
router.post("/get", GetFavorite);
router.post("/delete", deleteFavorite);

module.exports = router;
