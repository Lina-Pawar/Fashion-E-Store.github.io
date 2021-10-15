import { ProdList } from "./ProdList";
import Navbar from "../Navbar";
import Slider from "infinite-react-carousel";
import {useState} from "react";
import Service from "../Service";
import "./ProductDetail.css";
import "../Loader.css";

var Sizes=[];
function ProductDetail() {
  var itemName;
  window.scrollTo(0,0);
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
  var y=setInterval(function(){
    if(ProdList.length>0){
      clearInterval(y);
      itemName = index();
      document.getElementById("s1").innerHTML=Sizes[0];
      document.getElementById("s2").innerHTML=Sizes[1];
      document.getElementById("s3").innerHTML=Sizes[2];
      document.getElementById("s4").innerHTML=Sizes[3];
      document.getElementById("s5").innerHTML=Sizes[4];
      if(Sizes[0]==="Onesize"){
        document.getElementById("s1").style.width="70px";
        document.getElementById("s2").style.display="none";
        document.getElementById("s3").style.display="none";
        document.getElementById("s4").style.display="none";
        document.getElementById("s5").style.display="none";   
      }
      document.getElementById("item-name").innerHTML=ProdList[itemName]["name"];
      document.getElementById("item-details").innerHTML=ProdList[itemName]["details"];
      document.getElementById("item-price").innerHTML="Rs. "+ProdList[itemName]["price"];
      var photo1='data:image/JPEG;base64,'+ProdList[itemName].image1;
      var photo2='data:image/JPEG;base64,'+ProdList[itemName].image2;
      document.getElementById("image1").innerHTML=" <img src="+photo1+" className='detimg' alt='product'/>";
      document.getElementById("image2").innerHTML=" <img src="+photo2+" className='detimg' alt='product'/>";
    }
  },500
  );
  const [prodSize,setSize]=useState('');
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

function addcart(){
  if(prodSize===''){
    alert("Choose a size!");
  }else if(ProdList[itemName]["quantity"]===0){
    alert("Out of stock");
  }else if(document.getElementById("quantity").value>ProdList[itemName]["quantity"]){
    alert("Low stock");
  }else{
    var item_price=Number.parseFloat(document.getElementById("item-price").innerHTML.slice(3,)).toFixed(2);
    const data={username:window.localStorage.getItem("fashion-e-store-user"),product:document.getElementById("item-name").innerHTML,
    size:prodSize,quantity:document.getElementById("quantity").value,price:item_price};
    Service.AddCart(data).then((resp) =>{
      if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        alert("Added to cart!");
      }else{
        alert("Error");
      }
  });  
}
}

  return (
    <>
    <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height: "8vh",width: "100%",position: "fixed",zIndex: "10",}}><Navbar/></div>
      <div className="detpage">
        <div className="detcar">
          <Slider dots>
            <div id="image1"></div>
            <div id="image2"></div>
          </Slider>
        </div>
        <div className="detcontent">
          <h2 id="item-name"> </h2>
          <br/>
          <p id="item-details"></p>
          <br/>
            <h3>Choose a size:</h3>
            <label><input type="radio" name="select" /><span className="size" id="s1" onClick={astcart1}></span></label>
            <label><input type="radio" name="select" /><span className="size" id="s2" onClick={astcart2}></span></label>
            <label><input type="radio" name="select" /><span className="size" id="s3" onClick={astcart3}></span></label>
            <label><input type="radio" name="select" /><span className="size" id="s4" onClick={astcart4}></span></label>
            <label><input type="radio" name="select" /><span className="size" id="s5" onClick={astcart5}></span></label>
          <br/><br/>
          <h3><span id="item-price"></span>
                &nbsp;&nbsp;&nbsp;&nbsp; Quantity:&nbsp;&nbsp;
                <button style={{ width: "35px", height: "35px", fontSize: "16px" }} onClick={decrease}>-</button>
                <input style={{width: "35px",height: "35px",fontSize: "16px",textAlign:"center"}} id="quantity" defaultValue="1"/>
                <button style={{ width: "35px", height: "35px", fontSize: "16px" }} onClick={increase}>+</button>
              </h3>
              <br/>
              <button className="atcbtn" onClick={addcart}>Add to Cart</button>
          <br/>
          </div>
      </div>
    </>
  );
}
export default ProductDetail;