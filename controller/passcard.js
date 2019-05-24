

const passcardController = (req, res) => {

    if (req.url === '/') {

        res.render('passcard', {
            isRoute: true
        })
    }
    if (req.url === '/all') {

        res.render('passcard', {
            isRoute: false
        })
    }
};



module.exports = {
    passcardController,
}