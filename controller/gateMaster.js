

const gateMasterController = (req, res) => {

 
    if(req.url === '/gate-master') {
        res.render('gateMaster', {
            isGateMaster: true

        })
    }
    if(req.url === '/gate-master/add') {
        res.render('gateMaster', {
            isAddGateMaster: true

        })
    }
};

const gateController = (req, res) => {
 
    if(req.url === '/gates') {
        res.render('gateMaster', {
            isGate: true

        })
    }
};

module.exports = {
    gateMasterController,
    gateController
}