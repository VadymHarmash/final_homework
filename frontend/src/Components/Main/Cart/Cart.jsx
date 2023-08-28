import React, { useState } from 'react'
import CartBanner from './CartBanner'
import OrderList from './OrderList'
import ThanksPage from './OrderListItems/ThanksPage';

export default function Cart({ productsArray, updatedProductsArray, setUpdatedProductsArray }) {
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    return (
        <div className="cart">
            {!isOrderPlaced ?
                <>
                    <CartBanner />
                    <OrderList 
                        productsArray={productsArray} 
                        setIsOrderPlaced={setIsOrderPlaced} 
                        updatedProductsArray={updatedProductsArray} 
                        setUpdatedProductsArray={setUpdatedProductsArray} />
                </>
                :
                <ThanksPage />
            }
        </div>
    )
}
