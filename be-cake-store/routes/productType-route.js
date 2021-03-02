const express = require('express');
const router = express.Router();

const {
	createProductType,
	getProductTypes,
	getProductType,
	updateProductType,
	deleteProductType,
} = require('../controllers/productType-controller');

router.post('', createProductType);
router.get('', getProductTypes);
router.get('/:id', getProductType);
router.put('/:id', updateProductType);
router.delete('/:id', deleteProductType);

module.exports = router;
