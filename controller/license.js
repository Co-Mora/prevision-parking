

const licenseController = (req, res) => {

    if(req.url === '/') {

        res.render('license', {
            

        })
    }
};



module.exports = {
    licenseController,
}