import React, { useState } from 'react';
import Product from './Product/Product.jsx';

function Products({ products }) {
  const limitedProducts = products.slice(0, 8)
  const [fullCatalog, setFullCatalog] = useState(false)
  const [productsToBuy, setProductsToBuy] = useState([])

  return (
    <div className='products'>
      <div className="container">
        <div className="wrapper products__wrapper">
          <h3>Categories</h3>
          <h2>Our Products</h2>
          <div className="products__cards">
            {fullCatalog ? (products.map((product) => (
              <Product key={product._id} product={product} />
            )))
              :
            limitedProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <button className='products__button' onClick={() => {
            setFullCatalog(!fullCatalog)
          }}>{fullCatalog ? 'Hide All' : 'Load More'}</button>
        </div>
      </div>
    </div>
  );
}

export default Products;