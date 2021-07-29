import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navlogo from "../../imgs/nav-logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  return (
    <nav className="navbar">
      <img className="logo" src={navlogo} alt="Nav Logo" />
      <input
        className="search"
        type="text"
        id="search"
        placeholder="Search"
      ></input>
      <span className="fas fa-search"></span>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/profile" className="profile">
          <li>
            <i className="fas fa-user-circle"></i>
            <span className="moblink" >&nbsp;&nbsp;Profile</span>
          </li>
        </Link>
        <li className="notify">
          <i className="fas fa-bell"></i>
          <span className="moblink">&nbsp;&nbsp;Notification</span>
          <select id="dropdown">
          <option>50% off on women tops today!</option>
          <option>Buy 1 get 1 free on Men t-shirts.</option>
          <option>Free shipping on all kids wear!</option>
          </select>
        </li>
        <Link to="/cart" className="cart">
          <li>
            <i className="fas fa-shopping-cart"></i>
            <span className="moblink">&nbsp;&nbsp;Cart</span>
          </li>
        </Link>
        <Link to="/login" className="logout">
          <li>
            <i className="fas fa-sign-out-alt"></i>
            <span className="moblink">&nbsp;&nbsp;Logout</span>
          </li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};
export default Navbar;
