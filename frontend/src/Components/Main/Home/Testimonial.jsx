import React from 'react'
import Stars from './Shared/Stars'

export default function Testimonial() {
    const navigationCount = 3
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
        <div className='testimonial'>
            <div className="container">
                <div className="testimonial__wrapper">
                    <h3>Testimonial</h3>
                    <h2>What Our Customer Saying?</h2>
                    <div className="testimonial__rating">
                        <div className="testimonial__rating__photo"></div>
                        <div className="testimonial__rating__stars">
                            <Stars />
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <h4>Sara Taylor</h4>
                        <h5>Consumer</h5>
                        <div className="testimonial__rating__navigation">
                            {Array.from({ length: navigationCount }).map((_, index) => (
                                <div key={index} className="testimonial__rating__navigation__page"></div>
                            ))}
                        </div>
                    </div>
                    <div className="testimonial__stats">
                        {stats.map((item, index) => (
                            <div key={index} className="testimonial__stats__stat">
                                <div className="testimonial__stats__stat__background"></div>
                                <h2>{item.number}</h2>
                                <p>{item.stat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
