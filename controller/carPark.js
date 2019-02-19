

const carParkController = (req, res) => {

    if(req.url === '/') {
        // const url = 'https://pa.parkaidemobile.com/?email=kw%40gmail.com&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTQ1MDI1MzU0LCJleHAiOjE1NDUxMTE3NTR9.EM5eL0sMUWMwe4NvwZPARwzaJf5hkWsP4-D4wGgoYPk'
        // const data = url.split('&')
        // const jwt = data[1].split('=')
        // console.log(jwt[1])
        res.render('carPark', {
            isRoute: true  

        })
    } if(req.url === '/:id') {
      
        res.render('carPark', {
            isRoute: false  

        })
    }
};

const zoneController =  (req, res) => {
    if(req.url === '/zone') {
        res.render('zone', {
            isRoute: false
        })
    }
    if(req.url === '/zone/add') {
        res.render('zone', {
            isRoute: true

        })
    }
};

const levelController =  (req, res) => {
    if(req.url === '/level') {
        res.render('level', {
            isRoute: false
        })
    }
    if(req.url === '/level/add') {
        res.render('level', {
            isRoute: true

        })
    }
};


const zLevelController =  (req, res) => {
    if(req.url === '/zlevel') {
        res.render('zLevel', {
            isRoute: false
        })
    }
    if(req.url === '/zlevel/add') {
        res.render('zLevel', {
            isRoute: true

        })
    }
};

const streetController =  (req, res) => {
    if(req.url === '/street') {
        res.render('street', {
            isRoute: false
        })
    }
    if(req.url === '/street/add') {
        res.render('street', {
            isRoute: true

        })
    }
};

const bayController =  (req, res) => {
    if(req.url === '/bay') {
        res.render('bay', {
            isRoute: false
        })
    }
    if(req.url === '/bay/add') {
        res.render('bay', {
            isRoute: true

        })
    }
};



const voucherController =  (req, res) => {
    if(req.url === '/voucher') {
        res.render('voucher', {
            isRoute: false
        })
    }
    if(req.url === '/voucher/add') {
        res.render('voucher', {
            isRoute: true

        })
    }
   
};


module.exports = {
    carParkController,
    zoneController,
    levelController,
    zLevelController,
    streetController,
    bayController,
    voucherController
}