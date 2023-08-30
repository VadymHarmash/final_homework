import React from 'react'

export default function TestimonialStats() {
    const stats = [
        {
            number: '100%',
            stat: 'Organic'
        },
        {
            number: '285',
            stat: 'Active Product'
        },
        {
            number: '350+',
            stat: 'Organic Orchads'
        },
        {
            number: '25+',
            stat: 'Years of Farming'
        }
    ]

    return (
        <div className="testimonial__stats">
            {stats.map((item, index) => (
                <div key={index} className="testimonial__stats__stat">
                    <div className="testimonial__stats__stat__background"></div>
                    <h2>{item.number}</h2>
                    <p>{item.stat}</p>
                </div>
            ))}
        </div>
    )
}
