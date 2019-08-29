const express = require('express')
const router = express.Router()
const bodyParse = require('body-parser')
const shortId = require('shortid')

const controller = require('../controllers/user.controller')

const db = require('../db')


router.get('/admin', (req, res) => res.send('Hello world'));

router.get('', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

router.get('/:id', controller.get);

// router.get('/home', controller.home);

module.exports = router;