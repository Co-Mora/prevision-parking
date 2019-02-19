

const masterController = (req, res) => {

    if(req.url === '/master') {
        // const url = 'https://pa.parkaidemobile.com/?email=kw%40gmail.com&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTQ0Njg3NjQzLCJleHAiOjE1NDQ3NzQwNDN9.LYR6LSstcRxGH21n1-HlvJr9pLWjmIv29mD6_kR2kZ4'
        // const data = url.split('&')
        // const jwt = data[1].split('=')
        // console.log(jwt[1])

        res.render('wheel', {
            wheel1: true  

        })
    }
    if(req.url === '/master/add') {
        res.render('wheel', {
            wheel2: true

        })
    }
};

const lockController =  (req, res) => {
    if(req.url === '/lock') {
        res.render('wheel', {
            wheel3: true
        })
    }
    if(req.url === '/lock/add') {
        res.render('wheel', {
            wheel4: true

        })
    }
};

const poleController =  (req, res) => {
    if(req.url === '/pole') {
        res.render('wheel', {
            wheel5: true
        })
    }
    if(req.url === '/pole/add') {
        res.render('wheel', {
            wheel6: true

        })
    }
};



module.exports = {
    masterController,
    lockController,
    poleController,
}