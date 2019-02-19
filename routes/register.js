const express = require('express');
const router = express.Router();
const RegisterRequest = require('../model/RegisterRequest');

router.get('/me', (req, res) => {

    res.render('register', {
        title: "Car Park Aide",
        error: req.url === '/me?auth=denied' ? 'Error Ocured' : ''
    })

});

router.post('/auth', (req, res) => {
    var registerUser = new RegisterRequest(req.body);
    const result = registerUser.handleRegisterRequest();
    console.log("Result: ", result)
    if(registerUser.handleRegisterRequest()) {
        setTimeout(() => {
            res.redirect('/login')
        }, 1000)
    } else {
        setTimeout(() => {
            res.redirect('/register/me?auth=denied');
        }, 200)
    }
});


module.exports = router;