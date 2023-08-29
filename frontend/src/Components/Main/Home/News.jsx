import React from 'react'
import { NavLink } from 'react-router-dom'

export default function News() {
    const posts = [
        {
            author: 'Rachi Card',
            title: 'The Benefits of Vitamin D & How to Get It',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Our Favourite Summertime Tommeto',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        // {
        //     author: 'Rachi Card',
        //     title: 'Benefits of Vitamin C & How to Get It',
        //     description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        // },
        // {
        //     author: 'Rachi Card',
        //     title: 'Research More Organic Foods',
        //     description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        // },
        // {
        //     author: 'Rachi Card',
        //     title: 'Everyday Fresh Fruites',
        //     description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        // },
        // {
        //     author: 'Rachi Card',
        //     title: "Don't Use Plastic Product! it's Kill Nature",
        //     description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        // }
    ]
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
                        {posts.map((post, index) => (
                            <div className="news__posts__post" key={index}>
                                <div className="news__posts__post__content">
                                    <span>By {post.author}</span>
                                    <h4>{post.title}</h4>
                                    <p>{post.description}</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
