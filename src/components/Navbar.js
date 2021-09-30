import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navlogo from "../imgs/nav-logo.png";
import oneOnone from "../imgs/1on1.png";
import free from "../imgs/free.png";
import off from "../imgs/50off.png";
import Service from "./Service";

function setuser(){
  var username=window.localStorage.getItem("fashion-e-store-user");
  const user={ username:username };
  let s="Hi, ";
  Service.userinfo(user).then((resp) => {
    if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
      const profiledetails=resp.data.response;
      s+=(profiledetails['firstname']+" "+profiledetails['lastname']);
      document.getElementById("fname").innerHTML=s;
    } else {
      alert("Error");
    }
  });
}
const Navbar = () => {
  setuser();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible1, setVisibility1] = useState(false);
  const [isVisible2, setVisibility2] = useState(false);
  const DropDown1 = isVisible1 ? "showdd" : "hidedd";
  const arrow1 = isVisible1 ? "fas fa-angle-up" : "fas fa-angle-down";
  const DropDown2 = isVisible2 ? "showdd" : "hidedd";
  const arrow2 = isVisible2 ? "fas fa-angle-up" : "fas fa-angle-down";
  var items=document.getElementsByClassName("list-item");
  var names=document.getElementsByClassName("productname");
  function searchresult(){
    var search=document.getElementById("search").value;
    for(var i=0;i<names.length;i++){
      if(names[i].innerHTML.toLowerCase().match(search.toLowerCase())){
        items[i].style.display="block";
      }else{
        items[i].style.display="none";
      }
    }
  }
  return (
    <nav className="navbar">
      <Link to= "/home" className="alogo"><img src={navlogo} alt="Nav Logo" className="logo"/></Link>
      <input className="search" type="text" id="search" placeholder="Search" autoComplete="off" onChange={searchresult}/>
      <span className="fas fa-search"></span>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li className="profile" onClick={() => setVisibility1((visible) => !visible)}>
          <i className="fas fa-user-circle"></i>
          <span className="moblink">&nbsp;&nbsp;Profile</span>
          &nbsp;&nbsp;<i className={arrow1}></i>
        </li>
        <div className={DropDown1}>
            <div><Link to="/home" className="notlink1"><p style={{fontSize:"20px",color:"white"}} id="fname"></p></Link></div>
            <div><Link to="/profile" className="notlink"><p style={{color:"white"}}><i className="fas fa-user-circle"></i>&nbsp;&nbsp;Edit Profile</p></Link></div>
            <div><Link to="/myOrders" className="notlink"><p style={{color:"white"}}><i className="fab fa-shopify"></i>&nbsp;&nbsp;My Orders</p></Link></div>
        </div> 
        <li className="notify" onClick={() => setVisibility2((visible) => !visible)}>
          <i className="fas fa-bell"></i>
          <span className="moblink">&nbsp;&nbsp;Notification</span>
          &nbsp;&nbsp;<i className={arrow2}></i>
        </li>
        <div className={DropDown2}>
            <div><Link to="/category?category=women&type=clothing" className="notlink">
              <p style={{color:"white"}}><img src={off} alt="off"/>&nbsp;&nbsp;50% off on women tops today!</p></Link>
            </div>
            <div><Link to="/category?category=men&type=clothing" className="notlink">
              <p style={{color:"white"}}><img src={oneOnone} alt="1on1"/>&nbsp;&nbsp;Buy 1 get 1 free on Men t-shirts.</p></Link>
            </div>
            <div><Link to="/category?category=kids&type=clothing" className="notlink">
              <p style={{color:"white"}}><img src={free} alt="free" style={{width:90}}/>&nbsp;&nbsp;Free shipping on all kids wear!</p></Link>
            </div>  
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
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
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
