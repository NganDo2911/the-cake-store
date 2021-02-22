const express = require('express');
const router = express.Router();
const ProductType = require('../models/productType');

exports.createProductType = async (req, res, next) => {
	const productType = new ProductType({
		name: req.body.name,
		description: req.body.description,
	});

	const existedProductType = await ProductType.findOne({ name: req.body.name, status: true });
	if (!existedProductType) {
		productType.save();
		res.status(201).json({
			message: 'Product Type added successfully',
		});
	} else {
		res.status(201).json({
			message: 'Product Type existed',
		});
	}
};

exports.getProductTypes = async (req, res, next) => {
	productTypes = await ProductType.find({ status: true }).select('-status');
	res.status(200).json(productTypes);
};
exports.getProductType = async (req, res, next) => {
	productType = await ProductType.findById(req.params.id).select('-status');
	if (productType) {
		res.status(200).json(productType);
	} else {
		res.status(404).json({ message: 'Category not found' });
	}
};

exports.updateProductType = async (req, res, next) => {
	const productType = new ProductType({
		_id: req.params.id,
		name: req.body.name,
		description: req.body.description,
	});
	await ProductType.updateOne({ _id: req.params.id }, productType).then((result) => {
		res.status(200).json({ message: 'Update successfull' });
	});
};

exports.deleteProductType = async (req, res, next) => {
	const productType = new ProductType({
		_id: req.params.id,
		name: req.body.name,
		description: req.body.description,
		status: false,
	});
	await ProductType.updateOne({ _id: req.params.id }, productType).then((result) => {
		res.status(200).json({ message: 'Delete successfull' });
	});
};
