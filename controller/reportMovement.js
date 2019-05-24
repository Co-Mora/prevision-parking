

const reportMovementController = (req, res) => {

    if(req.url === '/') {

        res.render('reportMove', {
          
        })
    }
};



module.exports = {
    reportMovementController,
}