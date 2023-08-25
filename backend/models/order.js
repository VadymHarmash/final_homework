const mongoose = require('mongoose')

const Product = require('./product')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    products: [
        {
            product: {
                type: Schema.Types.Array,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    orderDate: {
        type: String,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order