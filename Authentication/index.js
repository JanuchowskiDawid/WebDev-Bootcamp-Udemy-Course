const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/Bcrypt', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connected");
    })
    .catch((err) => {
        console.log("ERROR! Mongo error :c");
        console.log(err);
    })

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({ username, password: hash });
    await newUser.save();
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.send('homepage');
})
app.get('/secret', (req, res) => {
    res.send('You must be logged in to see me');
})

app.listen(3000, () => {
    console.log('listening on 3000');
})