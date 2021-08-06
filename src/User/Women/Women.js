import React from "react";
import Navbar from "../../components/Navbar";
import "./Women.css";
function Women() {
    return(
       <div className="womencontent">
        
        <div style={{backgroundColor:"#FCA3B9",height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="womenpage"><h1>Women</h1></div>
        </div>
    )
}
export default Women;