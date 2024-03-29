const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {
    secret: 'simplesecret',
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOptions))

app.get('/viewscount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You opened this site ${req.session.count} time(s)`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymus' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000');
})