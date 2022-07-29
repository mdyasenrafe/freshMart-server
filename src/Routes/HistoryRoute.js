const express = require("express");
const { getHistory } = require("../Controllers/HistoryController");

const router = express.Router();

router.post("", getHistory);

module.exports = router;
