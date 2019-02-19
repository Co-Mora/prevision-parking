const express = require('express');
const router = express.Router();
const login = require('../controller/login');

router.get('/', login.loginController);

router.post('/auth', login.authController);


module.exports = router;


