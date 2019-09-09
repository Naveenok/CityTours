import React from 'react'
import './Navbar.scss'

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/about" className="nav-link">about</a>
                </li>
                <li>
                    <a href="/tours" className="nav-link active"> tours</a>
                </li>
            </ul>
        </nav>
    )
}
