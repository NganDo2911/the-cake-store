const express = require('express');
const router = express.Router({ mergeParams: true });
const {
	createAddress,
	getAddress,
	getAddresses,
	updateAddress,
	deleteAddress,
} = require('../controllers/address-controller');

router.post('', createAddress);
router.get('', getAddresses);
router.get('/:addressId', getAddress);
router.put('/:addressId', updateAddress);
router.delete('/:addressId', deleteAddress);

module.exports = router;
