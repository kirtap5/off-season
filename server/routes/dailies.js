const express = require("express");
const router = express.Router();
const { createDaily, getDailies } = require("../controllers/dailies");

router.route("/").get(getDailies).post(createDaily);

module.exports = router;
