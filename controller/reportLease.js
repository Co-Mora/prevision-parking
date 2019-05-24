

const reportLeaseController = (req, res) => {

    if(req.url === '/') {

        res.render('reportLease', {
          
        })
    }
};



module.exports = {
    reportLeaseController,
}