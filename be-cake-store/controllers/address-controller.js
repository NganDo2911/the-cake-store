const Address = require('../models/address');

exports.createAddress = async (req, res, next) => {
	try {
		const address = new Address({
			fullname: req.body.fullname,
			phone: req.body.phone,
			city: req.body.city,
			district: req.body.district,
			county: req.body.county,
			postcode: req.body.postcode,
		});
		address.save();
		res.status(201).json(address);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};

exports.getAddresses = async (req, res, next) => {
	try {
		addresses = await Address.find();
		res.status(200).json(addresses);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};

exports.getAddress = async (req, res, next) => {
	try {
		address = await Address.findById(req.params.addressId);
		if (address) {
			res.status(200).json(address);
		} else {
			res.status(404).json({ message: 'Address not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};

exports.updateAddress = async (req, res, next) => {
	try {
		const address = new Address({
			_id: req.params.addressId,
			fullname: req.body.fullname,
			phone: req.body.phone,
			city: req.body.city,
			district: req.body.district,
			county: req.body.county,
			postcode: req.body.postcode,
		});
		await Address.updateOne({ _id: req.params.addressId }, address).then((result) => {
			res.status(200).json({ message: 'Update successfull' });
		});
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};

exports.deleteAddress = async (req, res, next) => {
	try {
		await Address.findByIdAndDelete(req.params.addressId);
		res.status(200).json({ message: 'Delete successfull' });
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};
