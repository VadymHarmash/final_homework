import React from 'react'
import Product from './Product/Product'

export default function Offer({ products }) {
    const offerProducts = products.slice(12, 16);

    return (
        <div className='offer'>
            <div className="container">
                <div className="wrapper offer__wrapper">
                    <h3>Offer</h3>
                    <h2>We Offer Organic For You</h2>
                    <div className="offer__products">
                        {offerProducts.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
