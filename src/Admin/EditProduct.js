import { ProdList } from "../components/Products/ProdList";
import React from "react";
import "./EditProduct.css";
import navlogo from "../imgs/nav-logo.png";
import {Link } from "react-router-dom";
var Sizes=[]
function EditProduct(){
    
    let para = new URLSearchParams(window.location.search);
    function index(){
        for(var i=0;i<ProdList.length;i++) {
          if(ProdList[i]["name"] === para.get("name")) {
            return i;
          }
        }
        return 0;
      }
    let itemName = index();
    // return (

    //     <div>
    //     <h1>Edit prod</h1>
    //     <h2>{ProdList[itemName].name}</h2>
    //     <p>{ProdList[itemName].details}</p>
    //     <input value={ProdList[itemName].name}/>
    //     <input value={ProdList[itemName].details}/>
    //     <input value={ProdList[itemName].quantity}/>
    //     <input value={ProdList[itemName].filters}/>
    //     <input value={ProdList[itemName].price}/>
    //     </div>
    // );
    return (
      <div className="edprod">
        <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"5"}} className="navbar">
      <Link to= "/admin" className="alogo" ><img src={navlogo} alt="Nav Logo" className="logo" style={{width:"200px"}} /></Link>
      </div>
      <div className="ep">
        <form className="epform">
        <input className="epinput" value={ProdList[itemName].name}/><br />
        <textarea className="epinput epta" value={ProdList[itemName].details}/><br />
         <input className="epinput" value={ProdList[itemName].filters}/><br />
         <input className="epinput epinp2" value={ProdList[itemName].price}/>&nbsp;<input className="epinput epinp2" value={ProdList[itemName].quantity}/>
        </form>
      </div>

      </div>
    )
}
export default EditProduct;