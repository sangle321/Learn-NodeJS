const express = require('express')
const router = express.Router()
var cookies = require("cookie-parser");

const authMiddleware = require('../middlewares/auth.middleware')

const controller = require('../controllers/user.controller')
const validate = require('../routers/validate/users.validate')


router.get('/admin', (req, res) => res.send('Hello world'));

router.get('' , controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create',validate.postCreate, controller.postCreate);

router.get('/:id', controller.get);


module.exports = router;