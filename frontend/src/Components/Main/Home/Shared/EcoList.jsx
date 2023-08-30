import React from 'react'

export default function EcoList() {
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
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </li>
            ))}
        </ul>
    )
}
