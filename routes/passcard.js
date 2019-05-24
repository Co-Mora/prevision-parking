const express = require('express');
const router = express.Router();
const passcard = require('../controller/passcard');

router.get('/', passcard.passcardController);

router.get('/all', passcard.passcardController);

module.exports = router;