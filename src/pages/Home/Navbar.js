import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navlogo from "../../imgs/nav-logo.png";
import oneOnone from "../../imgs/1on1.png";
import free from "../../imgs/free.png";
import off from "../../imgs/50off.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setVisibility] = useState(false);
  const DropDown = isVisible ? "showdd" : "hidedd";
  const arrow = isVisible ? "fas fa-angle-up" : "fas fa-angle-down" ;
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
        <li className="notify" onClick={() => setVisibility((visibility) => !visibility)}>
          <i className="fas fa-bell"></i>
          <span className="moblink">&nbsp;&nbsp;Notification</span>
          &nbsp;&nbsp;<i className={arrow} ></i>
          
        </li>
        <div className={DropDown}>
            <div><Link to="/login" className="notlink"><p><img src={off} alt="off" />&nbsp;&nbsp;50% off on women tops today!</p></Link></div>
            <div><Link to="/register" className="notlink"><p><img src={oneOnone} alt="1on1" />&nbsp;&nbsp;Buy 1 get 1 free on Men t-shirts.</p></Link></div>
            <div><Link to="/login" className="notlink"><p><img src={free} alt="free" style={{width:90}}/>&nbsp;&nbsp;Free shipping on all kids wear!</p></Link></div>  
        </div> 
        
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
