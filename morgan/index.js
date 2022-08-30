const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use((req, res, next) => {
    console.log('First Middleware');
    next();
})
app.use((req, res, next) => {
    console.log('Secound Middleware');
    next();
})

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/dog', (req, res) => {
    res.send('woof');
})

app.listen(3000, () => {
    console.log('app running on localhost:3000');
})