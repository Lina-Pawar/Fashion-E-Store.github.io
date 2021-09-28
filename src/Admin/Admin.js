import React from "react";
import  "../components/Navbar.css";
import logo from "../imgs/logo.jpg";
import navlogo from "../imgs/nav-logo.png";
import {Link } from "react-router-dom";
import "./Admin.css";
import Productslist from "./Productslist";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Chatbox from "./Chatbox";
import Orders from "./Orders";

function Admin(){
    function products(){
        document.getElementById("bg").style.display="none";
        document.getElementById("products").style.display="block";
        document.getElementById("customers").style.display="none";
        document.getElementById("analytics").style.display="none";
        document.getElementById("chatbox").style.display="none";
        document.getElementById("orders").style.display="none";
    }
    function customers(){
        document.getElementById("bg").style.display="none";
        document.getElementById("products").style.display="none";
        document.getElementById("customers").style.display="block";
        document.getElementById("analytics").style.display="none";
        document.getElementById("chatbox").style.display="none";
        document.getElementById("orders").style.display="none";
    }
    function orders(){
      document.getElementById("bg").style.display="none";
      document.getElementById("products").style.display="none";
      document.getElementById("orders").style.display="block";
      document.getElementById("customers").style.display="none";
      document.getElementById("analytics").style.display="none";
      document.getElementById("chatbox").style.display="none";
  }
    function analytics(){
        document.getElementById("bg").style.display="none";
        document.getElementById("products").style.display="none";
        document.getElementById("customers").style.display="none";
        document.getElementById("analytics").style.display="block";
        document.getElementById("chatbox").style.display="none";
        document.getElementById("orders").style.display="none";
    }
    function chatbox(){
        document.getElementById("bg").style.display="none";
        document.getElementById("products").style.display="none";
        document.getElementById("customers").style.display="none";
        document.getElementById("analytics").style.display="none";
        document.getElementById("chatbox").style.display="block";
        document.getElementById("orders").style.display="none";
    }
    return(
      <div className="admin">
      <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"5"}} className="navbar">
      <Link to= "/admin" className="alogo" ><img src={navlogo} alt="Nav Logo" className="logo" style={{width:"200px"}} /></Link>
      </div>
      <div className="dashboard" align="center">
        <button className="options" onClick={products}>Products</button><hr/>
        <button className="options" onClick={customers}>Customers</button><hr/>
        <button className="options" onClick={orders}>Orders</button><hr/>
        <button className="options" onClick={analytics}>Analytics</button><hr/>
        <button className="options" onClick={chatbox}>Chatbox</button><hr/>
        <button className="options" ><Link to="/" className="adlo">Logout</Link></button><hr />
      </div>
      <div id="bg">
      <img src={logo} className="logo1" alt="try"/>
      </div>
      <div id="products" style={{display:"none",width:"80%"}}>
        <Productslist/>
      </div>
      <div id="customers" style={{display:"none",width:"80%"}}>
        <Customers/>
      </div>
      <div id="orders" style={{display:"none",width:"80%",marginLeft:"16%"}}>
        <Orders />
      </div>
      <div id="analytics" style={{display:"none"}}>
        <Analytics/>
      </div>
      <div id="chatbox" style={{display:"none"}}>
        <Chatbox/>
      </div>
      </div>
    );
}
export default Admin;