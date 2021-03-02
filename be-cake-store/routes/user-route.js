const express = require('express');
const router = express.Router({ mergeParams: true });
const { createUser, getUser, updateUser, getUsers } = require('../controllers/user-controller');
const addressRoutes = require('./address-route');


router.post('', createUser);
router.get('/', getUser);
router.put('/', updateUser);

module.exports = router;
