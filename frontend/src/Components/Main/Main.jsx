import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Pages from './Pages/Pages'
import Shop from './Shop/Shop'
import Projects from './Projects/Projects'
import News from './News/News'
import Cart from './Cart/Cart'

export default function Main({ products }) {
    return (
        <Routes>
            <Route path='/' element={<Home products={products} />} />
            <Route path='/about' element={<About />} />
            <Route path='/pages' element={<Pages />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/news' element={<News />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}
