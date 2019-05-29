const express = require('express');
const router = express.Router();
const subscriber = require('../controller/subscriber');

router.get('/', subscriber.subscriberController);

module.exports = router;