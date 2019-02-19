

const cityontroller = (req, res) => {

    if(req.url === '/cities') {
        res.render('location', {
            isCity: true
    
        })
    }
    
   
};

const countryontroller = (req, res) => {

    
    if(req.url === '/countries') {

        res.render('location', {
            isCountry: true

        })
    }

    
   
};


const stateontroller = (req, res) => {

    
    if(req.url === '/states') {
        res.render('location', {
            isState: true
    
        })
    }
    
    
   
};






module.exports = {
    cityontroller,
    countryontroller,
    stateontroller
}