const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const gateMaster = require('../controller/gateMaster');


router.get('/gate-master', auth, gateMaster.gateMasterController);
router.get('/gates', auth, gateMaster.gateController);

module.exports = router;