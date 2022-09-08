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
    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({ username, password: hash });
    await newUser.save();
    req.session.user_id = user.id;
    res.redirect('/');
})

app.post('/login', async (req, res) => {
    const { password, username } = req.body;
    const user = await User.findOne({ username: username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        req.session.user_id = user.id;
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
app.get('/secret', (req, res) => {
    if (!req.session.user_id) { res.redirect('/login') };
    res.render('secret');
})

app.listen(3000, () => {
    console.log('listening on 3000');
})