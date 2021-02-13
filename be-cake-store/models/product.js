const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  size: { type: Array },
  image: { type: Array },
  colourTheme: { type: Array },
  numberOnCake: { type: String },
  inscriptionForCake: { type: String },
  inscriptionColour: { type: String },
  cakeFillings: { type: String },
  sparkles: { type: String },
  candles: { type: String },
  status: { type: Boolean },
});

module.exports = mongoose.model("Product", productSchema);
