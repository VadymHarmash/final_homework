import React, { useState } from 'react'
import CartBanner from './CartBanner'
import OrderList from './OrderList'
import ThanksPage from './OrderListItems/ThanksPage';

export default function Cart({ productsArray }) {
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    return (
        <div className="cart">
            {!isOrderPlaced ?
                <>
                    <CartBanner />
                    <OrderList productsArray={productsArray} setIsOrderPlaced={setIsOrderPlaced} />
                </>
                :
                <ThanksPage productsArray={productsArray} />
            }
        </div>
    )
}
