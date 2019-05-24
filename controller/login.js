const LoginRequest = require('../model/LoginRequest');

module.exports.loginController = (req, res) => {
    res.render('auth', {
        title: "Car Park Aide",
        error: req.url === '/?access=denied' ? 'Error Occured' : ''
    });
}


module.exports.authController = (req, res, next) => {
    console.log(req.body);
    var loginUser = new LoginRequest(req.body);
    var tr = loginUser.handleLoginRequest()
    if(tr) {
        setTimeout(() => {
            return res.redirect('/')
        }, 100)
    }
 
}