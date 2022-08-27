const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })
