const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  rating: { type: String },
  title: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Review", reviewSchema);
