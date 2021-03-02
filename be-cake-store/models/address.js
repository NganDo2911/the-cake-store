const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
	fullname: { type: String },
	phone: { type: String },
	city: { type: String },
	district: { type: String },
	county: { type: String },
	postcode: { type: String },
});

module.exports = mongoose.model("Address", addressSchema);
