const url = 'https://sys2.parkaidemobile.com/api2/auth2/web/login';
const fetch = require('node-fetch');
const store = require('store')
const { URLSearchParams } = require('url');
const params = new URLSearchParams();



module.exports = class LoginRequest {
    
    constructor(user) {
        this.user = user;
    }

    handleLoginRequest() {
        params.append('email',  this.user.email);
        params.append('password', this.user.password);
        try {
            fetch(url, { method: 'POST', body: params })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.auth === true) {
                    console.log('Auth: ', json.auth)
                    params.delete('email');
                    params.delete('password');
                    store.set('userLogin', { jwt: json.token, userID: json.userID, email: this.user.email})
                    if (typeof localStorage === "undefined" || localStorage === null) {
                        var LocalStorage = require('node-localstorage').LocalStorage;
                        var localStorage = new LocalStorage('./scratch');
                        var data = JSON.stringify(store.get('userLogin'))
                        localStorage.setItem('userLogin.json', data);
                    }
                }
            });

            return true;
        
        } catch(ex) {
            console.log(ex.message);
        }

    }
};