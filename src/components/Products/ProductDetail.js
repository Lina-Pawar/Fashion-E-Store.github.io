import { ProdList } from "./ProdList";
import Navbar from "../Navbar";
import Slider from "infinite-react-carousel";
import "./ProductDetail.css";
import Products from "./Products";
import demo1 from "../../imgs/c1.png";
import demo2 from "../../imgs/c2.png";

function ProductDetail() {
  let para = new URLSearchParams(window.location.search);
  function index(){
  for(var i=0;i<ProdList.length;i++) {
    if(ProdList[i]["name"] === para.get("name")) {
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
function addcart(){
  Cartitems.push({photo:photo1,name:ProdList[itemName].name,price:ProdList[itemName].price,quantity:document.getElementById("quantity").value});
  alert("Added to cart!");
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
        }}
      >
        <Navbar />
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
          <br />
          <p>{ProdList[itemName].details}</p>
          <br />
          <br />
          <h3>Choose a size: 
            <button className="size">XS</button>
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size">L</button>
            <button className="size">XL</button>
            </h3>
          <br />
          <h3>Rs. {ProdList[itemName].price}
            &nbsp;&nbsp;&nbsp;&nbsp; Quantity:&nbsp;&nbsp;
            <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={decrease}>-</button>
            <input style={{width: "40px",height: "40px",paddingLeft: "8px",fontSize: "16px",textAlign:"center"}} id="quantity" value="1"/>
            <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={increase}>+</button>
          </h3>
          <br />
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
export const Cartitems=[];