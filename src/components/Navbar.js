import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navlogo from "../imgs/nav-logo.png";
import oneOnone from "../imgs/1on1.png";
import free from "../imgs/free.png";
import off from "../imgs/50off.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible1, setVisibility1] = useState(false);
  const [isVisible2, setVisibility2] = useState(false);
  const DropDown1 = isVisible1 ? "showdd" : "hidedd";
  const arrow1 = isVisible1 ? "fas fa-angle-up" : "fas fa-angle-down" ;
  const DropDown2 = isVisible2 ? "showdd" : "hidedd";
  const arrow2 = isVisible2 ? "fas fa-angle-up" : "fas fa-angle-down" ;
  const fname="Amit Naik";
  return (
    <nav className="navbar">
      <img className="logo" src={navlogo} alt="Nav Logo" />
      <input
        className="search"
        type="text"
        id="search"
        placeholder="Search"
      />
      <span className="fas fa-search"></span>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li className="profile" onClick={() => setVisibility1((visible) => !visible)}>
          <i className="fas fa-user-circle"></i>
          <span className="moblink">&nbsp;&nbsp;Profile</span>
          &nbsp;&nbsp;<i className={arrow1} ></i>

        </li>
        <div className={DropDown1}>
            <div><Link to="/home" className="notlink1"><p style={{fontSize:"20px"}}><b>Hi, {fname}</b></p></Link></div>
            <div><Link to="/register" className="notlink"><p><i className="fas fa-user-circle"></i>&nbsp;&nbsp;Edit Profile</p></Link></div>
            <div><Link to="/passwordrecovery" className="notlink"><p><i className="fas fa-exchange-alt"></i>&nbsp;&nbsp;Change Password</p></Link></div>
        </div> 
        <li className="notify" onClick={() => setVisibility2((visible) => !visible)}>
          <i className="fas fa-bell"></i>
          <span className="moblink">&nbsp;&nbsp;Notification</span>
          &nbsp;&nbsp;<i className={arrow2} ></i>
          
        </li>
        <div className={DropDown2}>
            <div><Link to="/women" className="notlink"><p><img src={off} alt="off" />&nbsp;&nbsp;50% off on women tops today!</p></Link></div>
            <div><Link to="/men" className="notlink"><p><img src={oneOnone} alt="1on1" />&nbsp;&nbsp;Buy 1 get 1 free on Men t-shirts.</p></Link></div>
            <div><Link to="/kids" className="notlink"><p><img src={free} alt="free" style={{width:90}}/>&nbsp;&nbsp;Free shipping on all kids wear!</p></Link></div>  
        </div> 
        
        <Link to="/cart" className="cart">
          <li>
            <i className="fas fa-shopping-cart"></i>
            <span className="moblink">&nbsp;&nbsp;Cart</span>
          </li>
        </Link>
        <a href="#contactus" className="contactus">
          <li>
            <i className="fas fa-phone-alt"></i>
            <span className="moblink">&nbsp;&nbsp;Contact Us</span>
          </li>
        </a>
        <button className= "logout" onClick={(e) => { window.location.href="/";}}>
          <li>
            <i className="fas fa-sign-out-alt"></i>
            <span className="moblink">&nbsp;&nbsp;Logout</span>
          </li>
        </button>
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
