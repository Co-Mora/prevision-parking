
const store = require('store')

module.exports = class RedirectUser {
    
    constructor(token) {
        this.token = token;
    }

    handUserRequest() {
        try {
            store.set('userLogin', { jwt: this.token, userID: '', email: ''})
            if (typeof localStorage === "undefined" || localStorage === null) {
                var LocalStorage = require('node-localstorage').LocalStorage;
                var localStorage = new LocalStorage('./scratch');
                var data = JSON.stringify(store.get('userLogin'))
                localStorage.setItem('userLogin.json', data);
            }

        } catch(ex) {
            console.log(ex);
        }
        return true;
    }
                            

};