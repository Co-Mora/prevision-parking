

const advertController = (req, res) => {

    if(req.url === '/') {

        res.render('advert', {
            isAdvert: false

        })
    }
    if(req.url === '/add') {
        res.render('advert', {
            isAdvert: true

        })
    }
};



module.exports = {
    advertController,
}