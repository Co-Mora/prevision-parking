const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const license = require('../controller/license');

router.get('/', license.licenseController);

module.exports = router;