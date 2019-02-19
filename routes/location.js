const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const location = require('../controller/location');

router.get('/cities', location.cityontroller);

router.get('/countries', location.countryontroller);

router.get('/states', location.stateontroller);

module.exports = router;