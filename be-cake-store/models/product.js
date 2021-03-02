const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: { type: String, requiredPaths: true },
		prices: { type: Array},
		image: { type: Array },
		colourTheme: { type: Array },
		numberOnCake: { type: String },
		inscriptionForCake: { type: String },
		inscriptionColour: { type: Array },
		cakeFillings: { type: Array },
		sparkles: { type: Array },
		candles: { type: Array },
		status: { type: Boolean, default: true },
		productTypeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProductType',
			required: true,
		},
	},
	{ timestamps: true }
);

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });
productSchema.virtual('review', {
	ref: 'Review', // model to use
	localField: '_id', // find in model, where localField
	foreignField: 'productId', // is equal to foreignField
});


module.exports = mongoose.model('Product', productSchema);
