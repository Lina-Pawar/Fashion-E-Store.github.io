import { ProdList } from "../components/Products/ProdList";
import React,{useState} from "react";
import "./EditProduct.css";
import navlogo from "../imgs/nav-logo.png";
import {Link } from "react-router-dom";
import Service from "../components/Service";


function EditProduct(){
  const [pname, setpname] = useState("");
  const [pdet,setpdet]= useState("");
  const [pfilters,setpfilters]= useState("");
  const [pprice,setpprice]= useState("");
  const [pqty,setpqty]= useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
      var product = {pname:pname,pdet:pdet,pfilters:pfilters,pprice:pprice,pqty:pqty};
      Service.updateProd(product).then((resp) => {
        if(resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
          alert("Product Details updated!");
          window.location.href="/admin";
        }
      });
  };

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
    
    return (
      <div className="edprod">
        <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"5"}} className="navbar">
      <Link to= "/admin" className="alogo" ><img src={navlogo} alt="Nav Logo" className="logo" style={{width:"200px"}} /></Link>
      </div>
      <div className="ep">
        <form className="epform" onSubmit={handleSubmit}>
        <input className="epinput" defaultValue={ProdList[itemName].name} id="pname" onChange={(e) => setpname(e.target.value)}/><br />
        <textarea className="epinput epta" defaultValue={ProdList[itemName].details} id="pdet" onChange={(e) => setpdet(e.target.value)}/><br />
         <input className="epinput" defaultValue={ProdList[itemName].filters} id="pfilters" onChange={(e) => setpfilters(e.target.value)}/><br />
         <input className="epinput epinp2" defaultValue={ProdList[itemName].price} id="pprice" onChange={(e) => setpprice(e.target.value)} />&nbsp;
         <input className="epinput epinp2" defaultValue={ProdList[itemName].quantity}  id="pqty" onChange={(e) => setpqty(e.target.value)} />
         <br />
         <button type="submit">Update</button>
        </form>
      </div>

      </div>
    )
}
export default EditProduct;