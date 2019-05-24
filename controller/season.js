

const seasonController = (req, res) => {

    if(req.url === '/') {

        res.render('season', {
          
        })
    }
};



module.exports = {
    seasonController,
}