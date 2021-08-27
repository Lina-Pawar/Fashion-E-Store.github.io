import { ProdList } from "./ProdList";
import Navbar from "../Navbar";
import Slider from "infinite-react-carousel";
import "./ProductDetail.css";
import Products from "./Products";
import {useState} from "react";
import Service from "../Service";

var Sizes=[];
function ProductDetail() {
  const [prodSize,setSize]=useState('');
  let para = new URLSearchParams(window.location.search);
  function index(){
  for(var i=0;i<ProdList.length;i++) {
    if(ProdList[i]["name"] === para.get("name")) {
      if(ProdList[i]["filters"].match("Clothing")){
        Sizes=["XS","S","M","L","XL"];
      }else if(ProdList[i]["filters"].match("Footwear")){
        Sizes=["6","7","8","9","10"];
      }else{
        Sizes=["Onesize"];
      }
      return i;
    }
  }
  return 0;
}
function increase(){
  var x=document.getElementById("quantity");
  if(x.value<10){
    x.value=parseInt(x.value)+1;
  }
}
function decrease(){
  var x=document.getElementById("quantity");
  if(x.value>1){
    x.value=parseInt(x.value)-1;
  }
}
function astcart1(){
  var size1=document.getElementById("s1").innerHTML;
  setSize(size1)  
}
function astcart2(){
  var size2=document.getElementById("s2").innerHTML;
  setSize(size2)  
}
function astcart3(){
  var size3=document.getElementById("s3").innerHTML;
  setSize(size3)  
}
function astcart4(){
  var size4=document.getElementById("s4").innerHTML;
  setSize(size4)  
}
function astcart5(){
  var size5=document.getElementById("s5").innerHTML;
  setSize(size5)  
}
function addcart(){
  if(prodSize===''){
    alert("Choose a size!");
  }
  else{
    const data={username:window.localStorage.getItem("fashion-e-store-user"),product:ProdList[itemName].name,size:prodSize,quantity:document.getElementById("quantity").value,price:ProdList[itemName].price};
    Service.AddCart(data).then((resp) =>{
      if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        alert("Added to cart!");
      }else{
        alert("Error");
      }
  });  
}}
function prodsizes(){
  document.getElementById("s1").style.width="70px";
  document.getElementById("s2").style.display="none";
  document.getElementById("s3").style.display="none";
  document.getElementById("s4").style.display="none";
  document.getElementById("s5").style.display="none";
}
window.scrollTo(0,0);
let itemName = index();
var photo1='data:image/JPEG;base64,'+ProdList[itemName].image1;
var photo2='data:image/JPEG;base64,'+ProdList[itemName].image2;
  return (
    <div>
      <div
        style={{
          background:
            "-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
          height: "8vh",
          width: "100%",
          position: "fixed",
          zIndex: "10",
        }}>
        <Navbar/>
      </div>
      <div className="detpage">
        <div className="detcar">
          <Slider dots>
            <div><img src={photo1} className="detimg" alt="product"/></div>
            <div><img src={photo2} className="detimg" alt="product"/></div>
          </Slider>
        </div>

        <div className="detcontent">
          <h2>{ProdList[itemName].name}</h2>
          <br/>
          <p>{ProdList[itemName].details}</p>
          <br/>
            <h3>Choose a size:</h3>
            <label><input type="radio" name="select" /><span className="size" id="s1" onClick={astcart1}>{Sizes[0]}</span></label>
            <label><input type="radio" name="select" /><span className="size" id="s2" onClick={astcart2}>{Sizes[1]}</span></label>
            <label><input type="radio" name="select" /><span className="size" id="s3" onClick={astcart3}>{Sizes[2]}</span></label>
            <label><input type="radio" name="select" /><span className="size" id="s4" onClick={astcart4}>{Sizes[3]}</span></label>
            <label><input type="radio" name="select" /><span className="size" id="s5" onClick={astcart5}>{Sizes[4]}</span></label>
          <br/><br/>
          <h3>Rs. {Number.parseFloat(ProdList[itemName].price).toFixed(2)}
            &nbsp;&nbsp;&nbsp;&nbsp; Quantity:&nbsp;&nbsp;
            <button style={{ width: "35px", height: "35px", fontSize: "16px" }} onClick={decrease}>-</button>
            <input style={{width: "35px",height: "35px",fontSize: "16px",textAlign:"center"}} id="quantity" defaultValue="1"/>
            <button style={{ width: "35px", height: "35px", fontSize: "16px" }} onClick={increase}>+</button>
          </h3>
          <br/>
          <button className="atcbtn" onClick={addcart}>Add to Cart</button>
        </div>
      </div>
      <hr/><br/>
      <div style={{ backgroundColor: "white" }}>
        <h3 style={{ textAlign: "center" }}>SIMILAR PRODUCTS</h3>
        <div style={{ paddingBottom: "1.3vh" }}>
          <Products n={4}/>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;