const express = require('express');
const router = express.Router();
const { getAccounts,getAccount, updateAccount } = require('../controllers/account-controller');
const userRoutes = require('./user-route');
const addressRoutes= require('./address-route')

router.use('/:accountId/profile', userRoutes);
router.use('/:accountId/address', addressRoutes);

router.get('', getAccounts);
router.get('/:id', getAccount);
router.put('/:id', updateAccount);

module.exports = router;
