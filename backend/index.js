const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.js')
const Order = require('./models/order.js')

const PORT = 3333
const URL = 'mongodb://127.0.0.1:27017/final_task'

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

mongoose
    .connect(URL)
    .then(() => console.log('Connected to DB'))
    .catch(() => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`)
})

app.get('/products', (req, res) => {
    Product
        .find()
        .then((products) => {
            res
                .status(200)
                .json(products)
        })
})

app.post('/orders', (req, res) => {
    const orderData = req.body;
    const newOrder = new Order(orderData);

    newOrder.save()
        .then(() => {
            res.status(201).json({ message: 'Order saved successfully' });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error saving order', error: error });
        });
});

app.get('/orders', (req, res) => {
    Order
        .find()
        .then((orders) => {
            res
                .status(200)
                .json(orders)
        })
})