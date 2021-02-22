const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: { type: String },
		price: { type: String },
		size: { type: Array },
		image: { type: Array },
		colourTheme: { type: Array },
		numberOnCake: { type: String },
		inscriptionForCake: { type: String },
		inscriptionColour: { type: Array },
		cakeFillings: { type: Array },
		sparkles: { type: Array },
		candles: { type: Array },
		status: { type: Boolean },
		productTypeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProductType',
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
