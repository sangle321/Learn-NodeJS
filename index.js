const express = require('express');
const bodyParser = require('body-parser');
const post = 3000;

const userRouter = require('./routers/user.router')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')

app.set('views', './views')

app.get('/admin', (req, res) => res.send('Hello world'));

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index', {name : 'Sang'});
} );

app.get('/home', (req, res) => {
    res.render('navbar/index');
});

app.use('/users', userRouter);
app.listen(post, () => console.log('Example app listen on post $(post) !'));

