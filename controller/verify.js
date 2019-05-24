

const verifyController = (req, res) => {

    res.render('verify', {
        error: true
    })
   
};



module.exports = {
    verifyController,
}