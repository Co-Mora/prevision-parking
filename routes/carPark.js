const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const store = require('store');
const jwtFileSys = require('../util/jwtFileSys')
const carPark = require('../controller/carPark')



router.get('/?', carPark.carParkController);
router.get('/:id', carPark.carParkController);

// router.get('/zone', carPark.zoneController);
// router.get('/zone/add', carPark.zoneController);

// router.get('/level', carPark.levelController);
// router.get('/level/add', carPark.levelController);

// router.get('/zlevel', carPark.zLevelController);
// router.get('/zlevel/add', carPark.zLevelController);

// router.get('/street', carPark.streetController);
// router.get('/street/add', carPark.streetController);

// router.get('/bay', carPark.bayController);
// router.get('/bay/add', carPark.bayController);

// router.get('/voucher', carPark.voucherController);
// router.get('/voucher/add', carPark.voucherController);

module.exports = router;

//A23716207