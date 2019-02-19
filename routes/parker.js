const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const parker = require('../controller/parker');

router.get('/', auth, parker.parkerController);

router.get('/add', auth, parker.parkerController);


module.exports = router;