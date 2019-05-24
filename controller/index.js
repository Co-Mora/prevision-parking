const store = require('store')

const RedirectUser = require('../model/RedirectUser');
// var currentUrl = window.location.pathname;
// // const url = 'https://pa.parkaidemobile.com/?email=kw%40gmail.com&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTQ1MDI1MzU0LCJleHAiOjE1NDUxMTE3NTR9.EM5eL0sMUWMwe4NvwZPARwzaJf5hkWsP4-D4wGgoYPk'
// // const data = url.split('&')
// // const jwt = data[1].split('=')
// // console.log(jwt[1])


module.exports.homeController = (req, res) => {
    if (req.url.startsWith('/?email')) {

        const data = req.url.split('&')
        const jwt = data[1].split('=');
        const email = data[0].split('=');
        const orginalEmail = email[1].replace('&#x40;', '@')
        const token = jwt[1]
        
        store.set('userVerify', { token: token, email: decodeURIComponent(orginalEmail) })
        if (typeof localStorage === "undefined" || localStorage === null) {

            var LocalStorage = require('node-localstorage').LocalStorage;
            var localStorage = new LocalStorage('./scratch');
            localStorage.removeItem('userVerify.json');

            var data1 = JSON.stringify(store.get('userVerify'))
            localStorage.setItem('userVerify.json', data1);
            return res.redirect(`/verify/${token}&email=${orginalEmail}`)

        }

        // var reqUser = new RedirectUser(token);
        // if(reqUser.handUserRequest()) {
        //     return res.redirect('/')

        // }
    } else {
        res.render('index', {
            title: "Car Park Aide"
        });
    }



};

