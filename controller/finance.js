

const financeController = (req, res) => {

 
    if(req.url === '/online') {
        res.render('finance', {
            isFinance: true
        })
    }
    if(req.url === '/giro') {
        res.render('finance', {
            isGiro: true
        })
    }
    if(req.url === '/cash') {
        res.render('finance', {
            isCash: true
        })
    }
    if(req.params.id) {
        res.render('finance', {
            isFinance: false

        })
    }
    
};


module.exports = {
    financeController,
}