const Account = require('../models/account');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
	const account = new Account({
		email: req.body.email,
		password: req.body.password,
	});

	const existedAcc = await Account.findOne({ email: req.body.email });
	if (!existedAcc) {
		account.save();
		res.status(201).json({
			message: 'Account added successfully',
			account: account,
		});
	} else {
		res.status(201).json({
			message: `The email address ${account.email} is already in use. Please enter a different one.`,
		});
	}
};

exports.login = async (req, res, next) => {
	try {
		var acc = await Account.findOne({ email: req.body.email }).exec();
		if (!acc) {
			return res.status(404).json({ message: 'Account is invalid' });
		}
		acc.comparePassword(req.body.password, (error, match) => {
			if (!match) {
				return res.status(404).json({ message: 'Account is invalid' });
			}
		});
		const token = jwt.sign({ email: acc.email, accId: acc._id }, process.env.TOKEN_KEY, {
			expiresIn: '3h',
		});
		res.status(200).json({
			token: token,
			expiresIn: 10800,
			accId: acc._id,
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

