const mongoose = require("mongoose");

const DailySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must prove name"],
    trim: true,
    maxLength: [20, "name can not be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
  streak: {
    type: Number,
    default: 0,
    required: [true, "Must set the current streak"],
  },
});

module.exports = mongoose.model("Daily", DailySchema);
