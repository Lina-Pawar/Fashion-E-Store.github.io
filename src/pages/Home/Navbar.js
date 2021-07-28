import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import navlogo from "../../imgs/nav-logo.png";
const Navbar = () =>{

    const [isMobile, setIsMobile] = useState(false);

    return(
        <nav className="navbar">
        <img className="logo" src={navlogo} alt="Nav Logo" />
        <input className="search" type="text" id="search" placeholder="Search"></input>
        <span className="fas fa-search"></span>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <Link to="/profile" className="profile">
                <li><i className="fas fa-user-circle"></i>&nbsp;&nbsp;<span className="moblink">Profile</span></li>
            </Link>
            <Link to="/notify" className="notify">
                <li><i className="fas fa-envelope"></i>&nbsp;&nbsp;<span className="moblink">Notification</span></li>
            </Link>
            <Link to="/cart" className="cart">
                <li><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;<span className="moblink">Cart</span></li>
            </Link>
            <Link to="/login" className="logout">
                <li><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;<span className="moblink">Logout</span></li>
            </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}> 
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
    </nav>
    );
    
}
export default Navbar;