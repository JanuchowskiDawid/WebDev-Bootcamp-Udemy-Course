const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/Bcrypt', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connected");
    })
    .catch((err) => {
        console.log("ERROR! Mongo error :c");
        console.log(err);
    })

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'nosecret' }));

const requireLogin = function (req, res, next) {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    req.session.user_id = newUser.id;
    res.redirect('/');
})

app.post('/login', async (req, res) => {
    const { password, username } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser.id;
        res.redirect("/secret")
    } else {
        res.send('Bad password or login')
    }
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.get('/', (req, res) => {
    res.send('homepage');
})
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.listen(3000, () => {
    console.log('listening on 3000');
})