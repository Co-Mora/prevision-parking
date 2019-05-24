const express = require('express');
const router = express.Router();
const verify = require('../controller/verify');

router.get('/', verify.verifyController);

router.get('/:id', verify.verifyController);

module.exports = router;