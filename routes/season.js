const express = require('express');
const router = express.Router();
const season = require('../controller/season');

router.get('/', season.seasonController);

module.exports = router;