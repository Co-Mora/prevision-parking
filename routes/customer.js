const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const store = require('store');
const jwtFileSys = require('../util/jwtFileSys')
const customer = require('../controller/customer');


router.get('/', auth, customer.customerController);
router.get('/add', auth, customer.customerController);


module.exports = router;