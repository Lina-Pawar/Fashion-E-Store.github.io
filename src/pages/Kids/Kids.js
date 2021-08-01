import React from "react";
import Navbar from "../Home/Navbar";
import "./Kids.css";
function Kids() {
    return(
       <div className="kidscontent">
        
        <div style={{backgroundColor:"#FCD752",height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="kidspage"><h1>Kids</h1></div>
        </div>
    )
}
export default Kids;