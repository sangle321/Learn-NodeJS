var db = require('../db')
const md5 = require('md5')

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res)=> {
    let email = req.body.email;
    let password = req.body.password;

    let user = db.get('users').find({email: email}).value();

    if(!user){
        res.render('auth/login', { 
            errors:['User does not exits !'],
            value : req.body
    });
        return;
    }
    let hashPassword = md5(password);
    if(user.password !== hashPassword){
        res.render('auth/login', {
            errors:['Wrong password !'],
            value : req.body
        });
        return;
    }
    res.cookie('userId', user.id,
        {signed: true}
    );
    res.redirect('/users');

};