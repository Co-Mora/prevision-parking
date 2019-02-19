const express = require('express');
const carParkRoute = require('../../routes/carPark');
const indexRoute = require('../../routes/index');

const wheelRoute = require('../../routes/wheel');
const customerRoute = require('../../routes/customer');

const locationRoute = require('../../routes/location');

const advertRoute = require('../../routes/advert');
const parkerRoute = require('../../routes/parker');

const gateMasterRoute = require('../../routes/gateMaster');

const staffRoute = require('../../routes/staff');
const loginRoute = require('../../routes/login');
const registerRoute = require('../../routes/register');

const cookieParser = require('cookie-parser');


module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use('/', indexRoute);
    app.use('/carparks', carParkRoute);
    app.use('/wheel', wheelRoute);
    app.use('/location', locationRoute);
    app.use('/gate', gateMasterRoute);

    app.use('/advert', advertRoute);
    app.use('/customers', customerRoute);
    app.use('/staff', staffRoute);
    app.use('/parker', parkerRoute)

    app.use('/login', loginRoute);
    app.use('/register', registerRoute);

}