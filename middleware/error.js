const createError = require('http-errors');
// catch 404 and forward to error handler

module.exports = (app) => {
    app.use((req, res, next) => {
        res.status(404).render('404', {
            error: true
        })
        //next(createError(404));
    });
};
