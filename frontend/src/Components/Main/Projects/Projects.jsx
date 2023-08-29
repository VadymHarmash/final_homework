import React from 'react'

export default function Projects() {
    const projects = [
        {
            title: 'Green & Tasty Lemon',
            category: 'Fruits'
        },
        {
            title: 'Organic Carrot',
            category: 'Farmer'
        },
        {
            title: 'Organic Betel Leaf',
            category: 'Leaf'
        },
        {
            title: 'Natural Tommato',
            category: 'Fruits'
        },
        {
            title: 'Black Raspberry',
            category: 'Farmer'
        },
        {
            title: 'Honey Orange',
            category: 'Farmer'
        }
    ]

    return (
        <div className="projects-page__projects">
            {projects.map((project, index) => (
                <div key={index} className="projects-page__projects__project">
                    <div className="projects-page__projects__project__image image">
                        <div className="projects-page__projects__project__image__next"></div>
                    </div>
                    <h2>{project.title}</h2>
                    <h3>{project.category}</h3>
                </div>
            ))}
        </div>
    )
}
