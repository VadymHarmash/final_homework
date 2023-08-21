import React from 'react'

export default function Eco() {
    const listItems = [
        {
            title: "Start with Our Company First",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
        },
        {
            title: "Learn How to Grow Yourself",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
        },
        {
            title: "Farming Strategies of Today",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
        }
    ]

    return (
        <div className="eco">
            <div className="container">
                <div className="wrapper eco__wrapper">
                    <div className="eco__content">
                        <h3>Eco Friendly</h3>
                        <h2>Econis is a Friendly Organic Store</h2>
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
