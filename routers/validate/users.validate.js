module.exports.postCreate = (req, res, next) =>{
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
    next();
};