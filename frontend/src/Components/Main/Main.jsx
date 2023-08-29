import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Pages from './Pages/Pages'
import ShopPage from './Shop/ShopPage'
import ProjectsPage from './Projects/ProjectsPage'
import NewsPage from './News/NewsPage'
import Cart from './Cart/Cart'
import NotFound from './NotFound/NotFound'
import OrdersPage from './Cart/OrdersPage'

export default function Main({ products, totalCountUpdater, productsArray, updatedProductsArray, setUpdatedProductsArray }) {
    return (
        <Routes>
            <Route path='/' element={<Home 
                                        products={products} 
                                        totalCountUpdater={totalCountUpdater} 
                                        productsArray={productsArray} />} />
            <Route path='/about' element={<About />} />
            <Route path='/pages' element={<Pages />} />
            <Route path='/shop' element={<ShopPage
                                        products={products} 
                                        totalCountUpdater={totalCountUpdater}
                                        productsArray={productsArray} />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/cart' element={<Cart 
                                        updatedProductsArray={updatedProductsArray} 
                                        setUpdatedProductsArray={setUpdatedProductsArray}
                                        totalCountUpdater={totalCountUpdater} />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
