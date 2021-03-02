const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String },
		email: { type: String },
		rating: { type: String },
		title: { type: String },
		description: { type: String },
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
