import React, { useEffect } from 'react'
import NewsBanner from './NewsBanner'
import News from '../Home/News'
import Form from '../Home/Form'

export default function NewsPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const allPosts = [
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
        {
            author: 'Rachi Card',
            title: 'Benefits of Vitamin C & How to Get It',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Research More Organic Foods',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Everyday Fresh Fruites',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: "Don't Use Plastic Product! it's Kill Nature",
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        }
    ]

    return (
        <div className="news-page">
            <NewsBanner />
            <div className="container">
                <div className="news-page__wrapper">
                    <News allPosts={allPosts} />
                    <Form />
                </div>
            </div>
        </div>
    )
}
