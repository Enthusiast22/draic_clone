import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="main-nav">
            <div className="logo">
                <h2>DRAIC</h2>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/Activities">Activities</Link>
                    </li>
                    <li>
                        <Link to="/Team">Team</Link>
                    </li>
                    <li>
                        <Link to="/Forum">Forum</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
