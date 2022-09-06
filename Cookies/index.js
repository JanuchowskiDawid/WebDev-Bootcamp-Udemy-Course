const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecrey'));

app.get('/greet', (req, res) => {
    const { name = 'Noname' } = req.cookies;
    res.send(`hallo ${name}`);
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });

    res.send(`hallo`);
})
app.get('/verifysignedcookie', (req, res) => {
    console.log(req.cookies);
    res.send(req.signedCookies);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'steve');
    res.send("Send a cookie");
})

app.listen(3000, () => {
    console.log("serving");
})