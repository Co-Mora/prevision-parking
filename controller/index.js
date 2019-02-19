
const RedirectUser = require('../model/RedirectUser');

module.exports.homeController =  (req, res) => {
    if(req.url.startsWith('/?email')) {
        const data = req.url.split('&')
        const jwt = data[1].split('=')
        const token = jwt[1]
        var reqUser = new RedirectUser(token);
        if(reqUser.handUserRequest()) {
            return res.redirect('/')

        }
    } else {
        res.render('index', {
            title: "Car Park Aide" 
        });
    }
    

   
};

