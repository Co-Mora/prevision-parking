const fetch = require('node-fetch');
const fs = require('fs');
const url = 'https://sys2.parkaidemobile.com/api/auth/me';

const auth = (req, res, next) => {
    var jwtFileSys = {
        token: null,
        jwt: function() {
            
            if (fs.existsSync('./scratch/userLogin.json')) {
                setTimeout(() => {
                    fs.readFile('./scratch/userLogin.json', 'utf8', (err, data) => {
                        if(err) {
                            console.log(err);
                            process.exit(1);
                        }
                        var dataParsed = JSON.parse(data);
                        this.token = dataParsed.jwt;
                    })
                }, 500)
              
                return this.token;
            }
            return res.redirect("/login");
            

        }
    }
    setTimeout(() => {
        jwtFileSys.jwt()
    }, 100)
    
    setTimeout(() => {
        try {
            fetch(url, {
                method: 'get',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': jwtFileSys.token
                },
        
            }).then(response => {
        
                    console.log(response.status)
                    if(response.status == 200) {
                        next();
                        
                    } else {
                        return res.redirect("/login?access=---denied");
                    }
            
            }).catch(error => {
                if (error) {
                    return res.render('500', {
                        error: true
                    })
                }
            
              });
            
        } catch(ex) {
            console.log(ex.message)
        }

    }, 1000)

}


module.exports = auth