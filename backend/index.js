require('dotenv').config()

const express = require('express')
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const connectDB = require('./db/db')

const PORT = process.env.PORT || 3333

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

connectDB()

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Listening port ${PORT}`))

app.get('/products', productController.getProducts);
app.post('/orders', orderController.createOrder)
app.get('/orders', orderController.getOrders)