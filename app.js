const express = require('express');
const path = require('path');
const bodyParser  = require('body-parser');
//const expressHB = require('express-handlebars');
const logger = require('morgan');


var app = express();

//App Engine SetUp
app.set('views', path.join(__dirname, 'views'))
//app.engine('hbs', expressHB())
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


//Routes
require('./startup/routes/routes')(app);

// catch 404 and forward to error handler
require('./middleware/error')(app);

//Error Handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};



    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

 module.exports = app;