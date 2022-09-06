const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send("hallo");
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'steve');
    res.send("Send a cookie");
})

app.listen(3000, () => {
    console.log("serving");
})