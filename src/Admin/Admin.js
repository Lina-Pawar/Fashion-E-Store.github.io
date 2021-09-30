import React from "react";
import  "../components/Navbar.css";
import logo from "../imgs/logo.jpg";
import navlogo from "../imgs/nav-logo.png";
import {Link } from "react-router-dom";
import Productslist from "./Productslist";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Chatbox from "./Chatbox";
import Orders from "./Orders";
import "./Admin.css";

function Admin(){
    var items=document.getElementsByClassName("list-item");
    var names=document.getElementsByClassName("productname");
    function searchresult(){
      var search=document.getElementById("adminsearch").value;
      for(var i=0;i<names.length;i++){
        if(names[i].innerHTML.toLowerCase().match(search.toLowerCase())){
          items[i].style.display="block";
        }else{
          items[i].style.display="none";
        }
      }
    }
    function admintabs(n){
        var vals=["products","customers","orders","analytics","chatbox"];
        if(n===0){
          document.getElementById("adminsearch").style.display="block";
        }else{
          document.getElementById("adminsearch").style.display="none";
        }
        for(var i=0;i<vals.length;i++){
          document.getElementById("bg").style.display="none";
          if(i!==n){
            document.getElementById(vals[i]).style.display="none";
          }else{
            document.getElementById(vals[i]).style.display="block";
          }
        }
    }
    return(
      <div className="admin">
      <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"5"}} className="navbar">
      <Link to= "/admin" className="alogo" ><img src={navlogo} alt="Nav Logo" className="logo" style={{width:"200px"}} /></Link>
      <input className="search" type="text" id="adminsearch" placeholder="Search" autoComplete="off" onChange={searchresult} style={{width:"400px",display:"none"}}/>
      </div>
      <div className="dashboard" align="center">
        <button className="options" onClick={()=>admintabs(0)}>Products</button><hr/>
        <button className="options" onClick={()=>admintabs(1)}>Customers</button><hr/>
        <button className="options" onClick={()=>admintabs(2)}>Orders</button><hr/>
        <button className="options" onClick={()=>admintabs(3)}>Analytics</button><hr/>
        <button className="options" onClick={()=>admintabs(4)}>Chatbox</button><hr/>
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