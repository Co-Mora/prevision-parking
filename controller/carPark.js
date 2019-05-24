

const carParkController = (req, res) => {
    console.log(req.params.id)
    if (req.url === '/') {
        

        res.render('carPark', {
            isCar: true

        })
    } if (req.params.id > 0) {

        res.render('carPark', {
            isCar: false

        })
    } if (req.params.id === 'zone') {
        res.render('zone', {
            isRoute: false
        })
    }

    if (req.params.id === 'level') {
        res.render('level', {
            isRoute: false
        })
    }
    if (req.params.id  === 'zlevel') {
        res.render('zLevel', {
            isRoute: false
        })
    }
    if (req.params.id  === 'street') {
        res.render('street', {
            isRoute: false
        })
    }
    if (req.params.id  === 'bay') {
        res.render('bay', {
            isRoute: false
        })
    }
};

// const zoneController = (req, res) => {
//     if (req.params.id === 'zone') {
//         res.render('zone', {
//             isRoute: false
//         })
//     }
//     if (req.url === '/zone/add') {
//         res.render('zone', {
//             isRoute: true

//         })
//     }
// };

// const levelController = (req, res) => {
//     if (req.url === '/level') {
//         res.render('level', {
//             isRoute: false
//         })
//     }
//     if (req.url === '/level/add') {
//         res.render('level', {
//             isRoute: true

//         })
//     }
// };


// const zLevelController = (req, res) => {
//     if (req.url === '/zlevel') {
//         res.render('zLevel', {
//             isRoute: false
//         })
//     }
//     if (req.url === '/zlevel/add') {
//         res.render('zLevel', {
//             isRoute: true

//         })
//     }
// };

// const streetController = (req, res) => {
//     if (req.url === '/street') {
//         res.render('street', {
//             isRoute: false
//         })
//     }
//     if (req.url === '/street/add') {
//         res.render('street', {
//             isRoute: true

//         })
//     }
// };

// const bayController = (req, res) => {
//     if (req.url === '/bay') {
//         res.render('bay', {
//             isRoute: false
//         })
//     }
//     if (req.url === '/bay/add') {
//         res.render('bay', {
//             isRoute: true

//         })
//     }
// };



const voucherController = (req, res) => {
    if (req.url === '/voucher') {
        res.render('voucher', {
            isRoute: false
        })
    }
    if (req.url === '/voucher/add') {
        res.render('voucher', {
            isRoute: true

        })
    }

};


module.exports = {
    carParkController,
}