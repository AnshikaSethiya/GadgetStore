import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.styles.css'

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="nav-item">
                <div className="logo">
                   <h1>
                       Gadget Store/
                   </h1>
                </div>
                <ul className="nav-links">
                    <li>Shop</li>
                    <li>Categories</li>
                    <li>Orders</li>
                    <li>Sign Up</li>
                    <li>Sign In</li>

                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar
