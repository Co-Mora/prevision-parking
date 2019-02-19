const url = 'https://sys2.parkaidemobile.com/api2/auth2/web/register';

const fetch = require('node-fetch');
const store = require('store')
const { URLSearchParams } = require('url');
const params = new URLSearchParams();


module.exports = class RegisterRequest{

    constructor(user) {
        this.user = user;
    }

    handleRegisterRequest() {
        console.log(this.user);
        // params.append('name', this.user.name);
        params.append('email', this.user.email);
        params.append('password', this.user.password);

        try {

            fetch(url, { method: 'POST', body: params })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if(json.register === true) {
                    console.log('Register: ', json.register)
                    store.set('userRegister', { uuid: json.uuid, email: json.email, userID: json.userID})
                    if (typeof localStorage === "undefined" || localStorage === null) {
                        var LocalStorage = require('node-localstorage').LocalStorage;
                        var localStorage = new LocalStorage('./scratch');
                        localStorage.setItem('userRegister.json', JSON.stringify(store.get('userRegister')));
                    }
                }
            });
            
            return true;

            
        } catch(ex) {
            console.log(ex.message);
        }
    }

};