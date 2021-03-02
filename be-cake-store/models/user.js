const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		fullname: { type: String },
		phone: { type: String },
		accountId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Account',
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
