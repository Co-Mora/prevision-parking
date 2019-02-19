const axios = require('axios')

const data = require('../../../scratch/userLogin.json');
console.log(data.jwt)

module.exports = () => {
    return axios.create({
        baseURL: 'https://sys2.parkaidemobile.com/api2/',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': data.jwt,
            'roleID': 10023
        }
    })
}

