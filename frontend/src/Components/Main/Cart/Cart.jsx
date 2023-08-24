import React from 'react'
import CartBanner from './CartBanner'
import OrderList from './OrderList'

export default function Cart({ productsArray }) {

    return (
        <div className="cart">
            <CartBanner />
            <OrderList productsArray={productsArray} />
        </div>
    )
}
