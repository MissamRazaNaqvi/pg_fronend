import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <ul className={classes.navbarUl}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/students'>Students</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </div>
    )
}
