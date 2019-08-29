const db = require('../db')
const bodyParse = require('body-parser')
const shortId = require('shortid')

module.exports.index  = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = (req, res) =>{

    let q = req.query.q;
    let macth = db.get('users').value().filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {users: macth});
};

module.exports.create = (req,res)=>{
    res.render('users/create');
};
module.exports.get = (req, res)=> {
    id = req.params.id;
    let users = db.get('users').find({id : id}).value();

    res.render('users/view', {users: users});
}

module.exports.postCreate = (req, res)=>{
    req.body.id = shortId.generate();
    let errors = [];
    if(!req.body.name){
        errors.push('Name is required.');
    }
    if(!req.body.phone){
        errors.push('Phone is required.');
    }
    if(errors.length){
        res.render('users/create', {
            errors:errors,
            value:res.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');
}
