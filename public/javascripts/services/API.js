const axios = require('axios')

const data = require('../../../scratch/userLogin.json');

module.exports = (content) => {
    return axios.create({
        baseURL: 'https://sys2.parkaidemobile.com/api2/',
        headers: { 
            'Content-Type': content,
            'x-access-token': data.jwt,
            'roleID': 10023
        }
    })
}


//
