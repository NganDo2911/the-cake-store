const mongoose = require("mongoose");

const productTypeSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("ProductType", productTypeSchema);
