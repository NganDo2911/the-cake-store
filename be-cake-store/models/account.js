const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const accountSchema = new mongoose.Schema(
	{
		email: { type: String },
		password: { type: String },
	},
	{ timestamps: true }
);

accountSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});

accountSchema.pre('updateOne', function (next) {
	const data = this.getUpdate();
	data.password = bcrypt.hashSync(data.password, 10);
	this.update({}, data).exec();
	next();
});

accountSchema.methods.comparePassword = function (AccountPassword, callback) {
	return callback(null, bcrypt.compareSync(AccountPassword, this.password));
};

accountSchema.set('toObject', { virtuals: true });
accountSchema.set('toJSON', { virtuals: true });
accountSchema.virtual('user', {
	ref: 'User', // model to use
	localField: '_id', // find in model, where localField
	foreignField: 'accountId', // is equal to foreignField
});

module.exports = mongoose.model('Account', accountSchema);
