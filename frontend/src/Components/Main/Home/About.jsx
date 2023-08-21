import React from 'react'
import fruits from './../../../assets/images/fruits.png'

export default function About() {

    const listItems = [
        {
            title: 'Organic Foods Only',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            title: 'Quality Standards',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        }
    ]

    return (
        <div className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__image">
                        <img src={fruits} alt="Fruits" />
                    </div>
                    <div className="about__content">
                        <h3>About Us</h3>
                        <h2>We Believe in Working Accredited Farmers</h2>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
