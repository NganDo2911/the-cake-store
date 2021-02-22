const express = require('express');
const Category = require('../models/category');

exports.createCategory = async (req, res, next) => {
	const category = new Category({
		name: req.body.name,
		description: req.body.description,
	});

	const existedCategory = await Category.findOne({ name: req.body.name, status: true });
	if (!existedCategory) {
		category.save();
		res.status(201).json({
			message: 'Category added successfully',
		});
	} else {
		res.status(201).json({
			message: 'Category existed',
		});
	}
};

exports.getCategories = async (req, res, next) => {
	categories = await Category.find({ status: true }).select('-status');
	res.status(200).json(categories);
};
exports.getCategory = async (req, res, next) => {
	category = await Category.findById(req.params.id).select('-status');
	if (category) {
		res.status(200).json(category);
	} else {
		res.status(404).json({ message: 'Category not found' });
	}
};

exports.updateCategory = async (req, res, next) => {
	const category = new Category({
		_id: req.params.id,
		name: req.body.name,
		description: req.body.description,
	});
	await Category.updateOne({ _id: req.params.id }, category).then((result) => {
		res.status(200).json({ message: 'Update successfull' });
	});
};

exports.deleteCategory = async (req, res, next) => {
	const category = new Category({
		_id: req.params.id,
		name: req.body.name,
		description: req.body.description,
		status: false,
	});
	await Category.updateOne({ _id: req.params.id }, category).then((result) => {
		res.status(200).json({ message: 'Delete successfull' });
	});
};
