import { ProdList } from "../components/Products/ProdList";
import React,{useState} from "react";
import ReactDOM from 'react-dom';
import navlogo from "../imgs/nav-logo.png";
import {Link } from "react-router-dom";
import Service from "../components/Service";
import "./EditProduct.css";

function EditProduct(){
  let para = new URLSearchParams(window.location.search);
  var y=setInterval(function(){
    if(ProdList.length>0){
      clearInterval(y);
      var itemName = index();

    const EditP=()=>{
      return(
        <form className="epform" onSubmit={handleSubmit}>
          <input className="epinput" defaultValue={ProdList[itemName].name} id="pname" placeholder="Enter Product name" required onChange={(e) => setpname(e.target.value)}/><br/>
          <textarea className="epinput epta" defaultValue={ProdList[itemName].details} id="pdet" placeholder="Enter Product Details" required onChange={(e) => setpdet(e.target.value)}/><br/>
          <input className="epinput" defaultValue={ProdList[itemName].filters} id="pfilters" placeholder="Enter Product Filters" required onChange={(e) => setpfilters(e.target.value)}/><br/>
          <input className="epinput epinp2" defaultValue={ProdList[itemName].price} id="pprice" placeholder="Enter Product Price" required onChange={(e) => setpprice(e.target.value)}/>&nbsp;
          <input className="epinput epinp2" defaultValue={ProdList[itemName].quantity}  id="pqty" placeholder="Enter Product Quantity" required onChange={(e) => setpqty(e.target.value)}/>
          <br/>
          <button onClick={()=>deleteHandler(ProdList[itemName].name)} className="epbtn">Delete</button><br/>
          <button type="submit" className="epbtn">Update</button>
        </form>
      );
    };
    ReactDOM.render(<EditP/>, document.getElementById("editprod"));
    }
  },500);
  function index(){
      for(var i=0;i<ProdList.length;i++) {
        if(ProdList[i]["name"] === para.get("name")) {
          return i;
        }
      }
      return 0;
    }
  
  const [pname, setpname] = useState(para.get("name"));
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
  const deleteHandler = (pname) => {
      const product = {pname:pname};
      Service.deleteProd(product).then((resp) => {
        if(resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
          alert("Product Deleted!");
          window.location.href="/admin";
        }
      });
  }

    return (
      <div className="edprod">
        <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"5"}} className="navbar">
      <Link to= "/admin" className="alogo" ><img src={navlogo} alt="Nav Logo" className="logo" style={{width:"200px"}}/></Link>
      </div>
      <div className="ep" id="editprod">
        <div className="spinner" style={{position:'relative',left:"45%"}}></div>
      </div>
      </div>
    )
}
export default EditProduct;