const express = require('express');
const router = express.Router();
const reportMov = require('../controller/reportMovement');

router.get('/', reportMov.reportMovementController);

module.exports = router;