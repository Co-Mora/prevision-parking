const express = require('express');
const router = express.Router();
const reportLease = require('../controller/reportLease');

router.get('/', reportLease.reportLeaseController);

module.exports = router;