import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Links() {
    const navLinks = [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/pages', text: 'Pages', class: 'pages' },
        { path: '/shop', text: 'Shop' },
        { path: '/projects', text: 'Projects' },
        { path: '/news', text: 'News' },
    ];

    return (
        <nav className='header__links'>
            <ul className='header__links__list'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path} className={`header__links__list__link ${link.class || ''}`}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
