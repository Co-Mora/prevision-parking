

const customerController = (req, res) => {

    if(req.url === '/') {

        res.render('customer', {
            isCustomer: false

        })
    }
    if(req.url === '/add') {
        res.render('customer', {
            isCustomer: true

        })
    }
};



module.exports = {
    customerController,
}