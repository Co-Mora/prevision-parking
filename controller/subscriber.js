

const subscriberController = (req, res) => {

    res.render('subscriber', {
        error: false
    })
   
};



module.exports = {
    subscriberController,
}