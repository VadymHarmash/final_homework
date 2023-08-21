import React from 'react'
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

export default function Home({ products }) {
  return (
    <>
      <Banner />
      <Posts />
      <About />
      <Products products={products} />
      <Testimonial />
      <Offer products={products} />
      <Eco />
      <Organic />
      <News />
      <Form />
    </>
  )
}
