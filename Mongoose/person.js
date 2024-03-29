const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ShopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

personSchema.pre('save', async function () {
    console.log("about to save")
})
personSchema.post('save', async function () {
    console.log("just saved")
})

const Person = mongoose.model('Person', personSchema);

const timmy = new Person({ first: 'Timmy', last: 'Kowalsky' });
timmy.save()
    .then(data => {
        console.log('done');
        console.log(data);
    })
    .catch(err => {
        console.log('error');
        console.log(err);
    })
console.log(timmy.fullName);
