const express = require('express');
const router = express.Router();
const finance = require('../controller/finance');

router.get('/online', finance.financeController);
router.get('/giro', finance.financeController);
router.get('/cash', finance.financeController);

router.get('/:id', finance.financeController);

module.exports = router;