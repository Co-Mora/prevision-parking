

const parkerController = (req, res) => {

    if(req.url === '/') {

        res.render('parker', {
            isParker: false

        })
    }
    if(req.url === '/add') {
        res.render('parker', {
            isParker: true

        })
    }
};



module.exports = {
    parkerController,
}