import React from 'react'

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
        }
    ]

    return (
        <div className="news">
            <div className="container">
                <div className="news__wrapper">
                    <h3>News</h3>
                    <div className="news__title">
                        <h2>Discover weekly content about organic food, & more</h2>
                        <a href="#">More News</a>
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
