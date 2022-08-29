const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ShopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    size: {
        type: String,
        enum: ['s', 'm', 'l', 'xl']
    }
});




productSchema.methods.greet = function () {
    console.log("Hello!");
    console.log(` - from ${this.name}`);
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product', productSchema);
// const helmet = new Product({ name: 'Bike Helmet', price: 19.90, categories: ['cycling', 'safety'] })
// helmet.save();
// const bike = new Product({ name: 'Mountain Bike', price: 1820, categories: ['mountains', 'bikes'] });
// bike.save()
//     .then(data => {
//         console.log('done');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('error');
//         console.log(err);
//     })

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
}
findProduct();