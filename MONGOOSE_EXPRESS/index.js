const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');


const Product = require('./models/product');

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
    try {
        fn(req, res, next).catch(e => next(e));
    }
    catch (e) {
        next(e);
    }
}

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

app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    }
    catch (e) {
        next(e)
    }
})


app.get('/products/:id', WrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
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

app.use((err, req, res, next) => {
    const { status = 500, message = 'smth wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("listening on 3000");
})