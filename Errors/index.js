const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');
app.use(morgan('tiny'));
// app.use((req, res, next) => {
//     // req.method = 'GET';
//     req.requestTime = Date.now();
//     console.log(req.method, req.path);
//     next();
// })

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'nuggets') {
        next();
    }
    throw new AppError('Password requiered', 401);
    // res.send('Wrong password');

}

app.use('/dogs', (req, res, next) => {
    console.log('middleware on every method with dogs');
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/admin', (req, res) => {
    throw new AppError('You re not an admin', 403);
})

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Secret is: ...');
})

app.get('/dog', (req, res) => {
    res.send('woof');
})

app.use((req, res) => {
    res.send('404 not found');
})

app.use((err, req, res, next) => {
    console.log("**********************");
    console.log("**********************");
    console.log("**********************");
    // res.status(500).send("OH NO ERROR");
    next(err);
})

app.listen(3000, () => {
    console.log('app running on localhost:3000');
})