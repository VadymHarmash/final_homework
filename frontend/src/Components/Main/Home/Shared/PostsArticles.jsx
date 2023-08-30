import React from 'react'

export default function PostsArticles() {
    const posts = [
        {
            subtitle: 'Natural!!',
            description: 'Get Garden Fresh Fruits',
            classes: [
                'posts__post',
                'posts__natural-post'
            ]
        },
        {
            subtitle: 'Offer!!',
            description: 'Get 10% off on Vegetables',
            classes: [
                'posts__post',
                'posts__offer-post'
            ]
        }
    ]

    return (
        <div className="posts__wrapper">
            {posts.map((post, index) => (
                <div key={index} className={post.classes.join(' ')}>
                    <h3>{post.subtitle}</h3>
                    <h2>{post.description}</h2>
                </div>
            ))}
        </div>
    )
}
