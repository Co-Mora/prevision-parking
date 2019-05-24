const express = require('express');
const cookieParser = require('cookie-parser');



// Car Park Route
const carParkRoute = require('../../routes/carPark');
const indexRoute = require('../../routes/index'); 
// Wheel Master Route
const wheelRoute = require('../../routes/wheel');
const gateMasterRoute = require('../../routes/gateMaster');

// Customer Route
const customerRoute = require('../../routes/customer');

// Location Route
const locationRoute = require('../../routes/location');

// License Route
const licenseRoute = require('../../routes/license');

// Report Route
const reportLeaseRoute = require('../../routes/reportLease');
const reportMoveRoute = require('../../routes/reportMov');

//Season Route ---
const seasonRouter = require('../../routes/season');


// Staff Route
const staffRoute = require('../../routes/staff');

// Login Route
const loginRoute = require('../../routes/login');
const registerRoute = require('../../routes/register');
const profileRoute = require('../../routes/profile');
const financeRoute = require('../../routes/finance');
const verifyRoute = require('../../routes/verify');

const operatorRoute = require('../../routes/operator');

const passcardRoute = require('../../routes/passcard');



module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use('/', indexRoute);
    app.use('/carparks', carParkRoute);
    app.use('/wheel', wheelRoute);
    app.use('/location', locationRoute);
    app.use('/gate', gateMasterRoute);
    app.use('/report/lease', reportLeaseRoute)
    app.use('/report/movement', reportMoveRoute)
    app.use('/verify', verifyRoute)
    app.use('/business', operatorRoute)

    app.use('/season', seasonRouter)
    app.use('/transaction', financeRoute)
    app.use('/passcard', passcardRoute)

    app.use('/license', licenseRoute);
    app.use('/customers', customerRoute);
    app.use('/staff', staffRoute);
    app.use('/profile', profileRoute);

    app.use('/login', loginRoute);
    app.use('/register', registerRoute);

}