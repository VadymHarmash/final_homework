import React from 'react'

export default function Cart({ productsArray }) {

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    {productsArray.map((product) => (
                        <li key={product.product._id}>
                            <p>{product.product.name} <span>{product.quantity}</span></p>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}
