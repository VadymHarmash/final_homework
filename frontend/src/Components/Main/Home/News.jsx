import React from 'react'
import { NavLink } from 'react-router-dom'
import NewsPost from './Shared/NewsPost'

export default function News({ allPosts = [
    {
        author: 'Rachi Card',
        title: 'The Benefits of Vitamin D & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
        author: 'Rachi Card',
        title: 'Our Favourite Summertime Tommeto',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    }
] }) {
    
    return (
        <div className="news">
            <div className="container">
                <div className="news__wrapper">
                    <h3>News</h3>
                    <div className="news__title">
                        <h2>Discover weekly content about organic food, & more</h2>
                        <NavLink to='/news' className='news__title__more' href="#">More News</NavLink>
                    </div>
                    <div className="news__posts">
                        {allPosts.map((post, index) => (
                            <NewsPost
                                key={index}
                                post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
