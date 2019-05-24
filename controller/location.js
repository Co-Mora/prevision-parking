

const cityontroller = (req, res) => {

    if(req.url === '/cities') {
        res.render('location', {
            isCity: true
    
        })
    }
    if(req.url === '/cities/add') {
        res.render('location', {
            isCityAdd: true
    
        })
    }
    
   
};

const countryontroller = (req, res) => {
    console.log("req.url=====", req.url)

    if(req.url === '/countries') {

        res.render('location', {
            isCountry: true

        })
    }
    if(req.url === '/countries/add') {

        res.render('location', {
            isCountryAdd: true
        })
    }

    
   
};


const stateontroller = (req, res) => {

    
    if(req.url === '/states') {
        res.render('location', {
            isState: true
    
        })
    }

    if(req.url === '/states/add') {
        res.render('location', {
            isStateAdd: true
    
        })
    }
    
    //isStateAdd
   
};






module.exports = {
    cityontroller,
    countryontroller,
    stateontroller
}