import React, { useState } from 'react'
import Banner from './Banner'
import Posts from './Posts'
import About from './About'
import Products from './Products'
import Testimonial from './Testimonial'
import Offer from './Offer'
import Eco from './Eco'
import Organic from './Organic'
import News from './News'
import Form from './Form'

export default function Home({ products, totalCountUpdater, productsArray }) {

  // const [totalCount, setTotalCount] = useState(0)
  // const [productsArray, setProductsArray] = useState([])

  // const totalCountUpdater = (newTotalCount) => {
  //   setTotalCount(newTotalCount)
  //   console.log(productsArray)
  //   console.log(newTotalCount)
  // }

  return (
    <>
      <Banner />
      <Posts />
      <About />
      <Products products={products} totalCountUpdater={totalCountUpdater} productsArray={productsArray} />
      <Testimonial />
      <Offer products={products} totalCountUpdater={totalCountUpdater} />
      <Eco />
      <Organic />
      <News />
      <Form />
    </>
  )
}
