const Daily = require("../models/Daily");
const asyncWrapper = require("./async");

// Controllers
const createDaily = asyncWrapper(async (req, res) => {
  const daily = await Daily.create(req.body);
  res.status(201).json({ daily });
});

const getDailies = asyncWrapper(async (req, res) => {
  const dailies = await Daily.find({});
  res.status(200).json({ dailies });
});

module.exports = { createDaily, getDailies };
