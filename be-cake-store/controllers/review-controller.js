const Review = require('../models/review');

exports.createReview = async (req, res, next) => {
	try {
		const productId = req.params.productId;
		const review = new Review({
			name: req.body.name,
			email: req.body.email,
			rating: req.body.rating,
			title: req.body.title,
			description: req.body.description,
			productId: productId,
		});
		review.save();
		res.status(201).json({
			message: 'Review added successfully',
			review: review,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getReviews = async (req, res, next) => {
	reviews = await Review.find({ productId: req.params.productId });
	if (reviews) {
		res.status(200).json(reviews);
	} else res.status(200).json({ message: 'Be the first to review this item' });
};

exports.deleteReview = async (req, res, next) => {
	await Review.findByIdAndDelete(req.params.id).then((result) => {
		res.status(200).json({ message: 'Delete successfull' });
	});
};
