

const profileController = (req, res) => {

    if(req.url === '/') {

        res.render('profile', {
          
        })
    }
};



module.exports = {
    profileController,
}