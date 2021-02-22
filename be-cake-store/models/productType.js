const mongoose = require("mongoose");

const productTypeSchema = new mongoose.Schema(
	{
		name: { type: String },
		description: { type: String },
		status: { type: Boolean, default: true },
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("ProductType", productTypeSchema);
