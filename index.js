require('dotenv').config();

console.log(process.env.SESSION_SECRET)

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const post = 3000;

const userRouter = require('./routers/user.router')
const authRouter = require('./routers/auth.router')

const authMiddleware = require('./middlewares/auth.middleware')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
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

app.use('/users',authMiddleware.requireAuth, userRouter);

app.use('/auth', authRouter);

app.listen(post, () => console.log('Example app listen on post $(post) !'));

