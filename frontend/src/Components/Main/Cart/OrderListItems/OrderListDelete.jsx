import React from 'react'

export default function OrderListDelete({ productsArray, product, updateProductsArray }) {

    function deleteProduct() {
        const productToDelete = product
        const filteredProducts = productsArray.filter((product) => product !== productToDelete)
        updateProductsArray(filteredProducts)
    }

    return (
        <button className="order-list__product__delete-button" onClick={deleteProduct}>X</button>
    )
}