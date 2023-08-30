import React from 'react'

export default function AboutList() {
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
