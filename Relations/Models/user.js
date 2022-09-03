const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    adress: [{
        city: String,
        state: String,
        country: String,
        street: String
    }]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Kane',
    })
    u.adress.push({
        street: '123 street',
        city: 'Rio',
        state: 'lubuskie',
        country: 'Poland'
    })
    const res = await u.save();
    console.log(res);
}
makeUser();