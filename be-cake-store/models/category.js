const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("Category", categorySchema);
