const Product = require('../models/product');
const ProductType = require('../models/productType');

exports.createProduct = async (req, res, next) => {
	const productType = await ProductType.findById(req.body.productTypeId);

	const product = new Product({
		name: req.body.name,
		prices: req.body.prices,
		image: req.body.image,
		colourTheme: req.body.colourTheme,
		numberOnCake: req.body.numberOnCake,
		inscriptionForCake: req.body.inscriptionForCake,
		inscriptionColour: req.body.inscriptionColour,
		cakeFillings: req.body.cakeFillings,
		sparkles: req.body.sparkles,
		candles: req.body.candles,
		productTypeId: productType._id,
	});

	const existedProduct = await Product.findOne({ name: req.body.name, status: true });
	if (!existedProduct) {
		product.save();
		res.status(201).json({
			message: 'Product added successfully',
			product: product,
		});
	} else {
		res.status(201).json({
			message: 'Product existed',
		});
	}
};

exports.getProducts = async (req, res, next) => {
	product = await Product.find({ status: true }).select('-status');

	res.status(200).json(product);
};

exports.getProduct = async (req, res, next) => {
	product = await Product.findById(req.params.id).select('-status').populate({ path: 'review' });

	if (product) {
		res.status(200).json(product);
	} else {
		res.status(404).json({ message: 'Product Type not found' });
	}
};

exports.updateProduct = async (req, res, next) => {
	const productType = await ProductType.findById(req.body.productTypeId);

	const product = new Product({
		_id: req.params.id,
		name: req.body.name,
		prices: req.body.prices,
		image: req.body.image,
		colourTheme: req.body.colourTheme,
		numberOnCake: req.body.numberOnCake,
		inscriptionForCake: req.body.inscriptionForCake,
		inscriptionColour: req.body.inscriptionColour,
		cakeFillings: req.body.cakeFillings,
		sparkles: req.body.sparkles,
		candles: req.body.candles,
		productTypeId: productType._id,
	});
	await Product.updateOne({ _id: req.params.id }, product).then((result) => {
		res.status(200).json({ message: 'Update successfull', product: product });
	});
};

exports.deleteProduct = async (req, res, next) => {
	const product = new Product({
		_id: req.params.id,
		status: false,
	});
	await Product.updateOne({ _id: req.params.id }, product).then((result) => {
		res.status(200).json({ message: 'Delete successfull' });
	});
};
