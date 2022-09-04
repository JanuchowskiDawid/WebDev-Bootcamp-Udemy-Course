const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})
const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})
const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Melon', price: 4.99, season: 'Summer' },
//     { name: 'Watermelon', price: 2.99, season: 'Fall' },
//     { name: 'Strawberry', price: 1.99, season: 'Spring' }
// ])



const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
    const melon = await Product.findOne({ name: 'Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm));