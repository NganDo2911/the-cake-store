const account = require('../models/account');
const User = require('../models/user');
const Account = require('../models/account');

exports.createUser = async (req, res, next) => {
	const user = new User({
		fullname: req.body.fullname,
		phone: req.body.phone,
		accountId: req.params.accountId,
	});
	user.save();

	res.status(201).json({
		message: 'User added successfully',
		user: user,
	});
};

exports.getUsers = async (req, res, next) => {
	const users = await User.find();
	res.status(200).json(users);
};

exports.getUser = async (req, res, next) => {
	try {
		const account = await Account.findById(req.params.accountId).populate({ path: 'user' });

		const user = await User.findOne({ _id: account.user[0]._id });
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
		console.log(error);
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const account = await Account.findById(req.params.accountId).populate({ path: 'user' });

		const user = new User({
			_id: account.user[0]._id,
			fullname: req.body.fullname,
			phone: req.body.phone,
			password: req.body.password,
		});
		await User.updateOne({ _id:account.user[0]._id  }, user).then((result) => {
			console.log(result);
			res.status(200).json({ message: 'Update successfull' });
		});
	} catch (error) {
			res.status(500).json({ message: 'Server error' });
		console.log(error);
	}
	
};
