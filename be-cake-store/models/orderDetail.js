const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
  amount: { type: String },
  sum: { type: String },
});

module.exports = mongoose.model("OrderDetail", orderDetailSchema);
