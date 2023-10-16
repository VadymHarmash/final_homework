const Order = require('../models/order.js')

// Створити нове замовлення
const createOrder = (req, res) => {
    const orderData = req.body
    const newOrder = new Order(orderData)

    newOrder.save()
        .then(() => {
            res.status(201).json({ message: 'Order saved successfully' })
        })
        .catch(error => {
            res.status(500).json({ message: 'Error saving order', error: error })
        })
}

// Отримати всі замовлення
const getOrders = (req, res) => {
    Order
        .find()
        .then((orders) => {
            res.status(200).json(orders)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error retrieving orders', error: error })
        })
}

module.exports = { createOrder, getOrders }