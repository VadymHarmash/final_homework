const Product = require('../models/product.js')

// Отримати всі продукти
const getProducts = (req, res) => {
    Product
        .find()
        .then((products) => {
            res.status(200).json(products)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error retrieving products', error: error })
        })
}

module.exports = { getProducts }