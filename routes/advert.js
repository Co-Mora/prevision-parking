const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const advert = require('../controller/advert');

router.get('/', auth, advert.advertController);
router.get('/add', auth, advert.advertController);

module.exports = router;