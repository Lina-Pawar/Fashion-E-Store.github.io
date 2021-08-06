import React from "react";
import Navbar from "../../components/Navbar";
import "./Men.css";
function Men() {
    return(
       <div className="mencontent">
        
        <div style={{backgroundColor:"#6184c6",height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="menpage"><h1>Men</h1></div>
        </div>
    )
}
export default Men;