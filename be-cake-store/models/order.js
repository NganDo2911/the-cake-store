const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  sum: { type: String },
  paymentMethod: { type: String },
});

module.exports = mongoose.model("Order", orderSchema);
