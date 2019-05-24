const express = require('express');
const router = express.Router();
const operator = require('../controller/operator');

router.get('/operators', operator.operatorController);

module.exports = router;