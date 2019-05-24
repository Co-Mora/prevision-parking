const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const store = require('store');
const jwtFileSys = require('../util/jwtFileSys')
const customer = require('../controller/customer');


router.get('/', customer.customerController);
router.get('/add', customer.customerController);


module.exports = router;