const express = require('express');
const router = express.Router({ mergeParams: true });

const { getReviews, deleteReview, createReview } = require('../controllers/review-controller');

router.get('', getReviews);
router.post('', createReview);
router.delete('/:id', deleteReview);

module.exports = router;
