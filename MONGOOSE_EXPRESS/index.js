const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');


const Product = require('./models/product');
const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connected");
    })
    .catch((err) => {
        console.log("ERROR! Mongo error :c");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];

function WrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}
// farm rotes
app.get('/farms', WrapAsync(async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
}))

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})

app.post('/farms', WrapAsync(async (req, res, next) => {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    res.redirect(`/farms`);
}))

app.get('/farms/:id', WrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate("products");
    if (!farm) {
        return next(new AppError('Product Not Found', 404));
    }
    res.render('farms/show', { farm })
}))

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);

    res.render('products/new', { categories, farm });
})

app.post('/farms/:id/products', WrapAsync(async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const product = new Product(req.body);
    farm.products.push(product);
    product.farm = farm;
    await product.save();
    await farm.save();
    res.redirect(`/farms/${id}`);
}))
//  product routes

app.get('/products', WrapAsync(async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ catergory: category });
        res.render('./products', { products, category });
    } else {
        const products = await Product.find({});
        res.render('./products', { products, category: 'All' });
    }
}))

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.get('/products/:id/edit', WrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/show', { product })
    res.render('products/edit', { product, categories });
}))

app.post('/products', WrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
}))


app.get('/products/:id', WrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm');
    if (!product) {
        return next(new AppError('Product Not Found', 404));
    }
    res.render('products/show', { product })
}))

app.put('/products/:id', WrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
}))

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})

// general routes

app.use((err, req, res, next) => {
    const { status = 500, message = 'smth wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("listening on 3000");
})