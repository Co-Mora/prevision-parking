const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const store = require('store');
const jwtFileSys = require('../util/jwtFileSys')
const wheel = require('../controller/wheel');


router.get('/master', wheel.masterController);
router.get('/master/add', wheel.masterController);

router.get('/lock', wheel.lockController);
router.get('/lock/add', wheel.lockController);

router.get('/pole', wheel.poleController);
router.get('/pole/add', wheel.poleController);

module.exports = router;