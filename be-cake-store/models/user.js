const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String },
  phone: { type: String },
});

module.exports = mongoose.model("User", userSchema);
