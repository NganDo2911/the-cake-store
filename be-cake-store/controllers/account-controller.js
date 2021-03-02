const Account = require('../models/account');

exports.getAccounts = async (req, res, next) => {
	accounts = await Account.find();
	res.status(200).json(accounts);
};

exports.getAccount = async (req, res, next) => {
	const account = await Account.findById(req.params.id).populate({path:'user'});
	
	if (account) {
		res.status(200).json(account);
	} else {
		res.status(404).json({ message: 'Account not found' });
	}
};

exports.updateAccount = async (req, res, next) => {
	const account = new Account({
		_id: req.params.id,
		password: req.body.password,
	});
	await Account.updateOne({ _id: req.params.id }, account).then((result) => {
		res.status(200).json({ message: 'Update successfull' });
	});
};

// exports.deleteAccount = async (req, res, next) => {
// 	const account = new Account({
// 		_id: req.params.id,
// 		status: false,
// 	});
// 	await Category.updateOne({ _id: req.params.id }, category).then((result) => {
// 		res.status(200).json({ message: 'Delete successfull' });
// 	});
// };
