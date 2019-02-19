const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const index = require('../controller/index');


router.get('/', index.homeController);

module.exports = router;