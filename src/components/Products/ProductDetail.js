import { ProdList } from "./ProdList";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "infinite-react-carousel";
import img1 from "../../imgs/c1.png"
import "./ProductDetail.css";

function ProductDetail() {
  let para = new URLSearchParams(window.location.search);
  function index(){
  for(var i = 0; i < ProdList.length; i++) {
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
window.scrollTo(0,0);
let itemName = index();
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
            <div>
              <img
                src={img1}
                className="detimg"
                alt="offers"
              />
            </div>
            <div>
              <img
                src={img1}
                className="detimg"
                alt="offers"
              />
            </div>
          </Slider>
        </div>

        <div className="detcontent">
          <h2>{ProdList[itemName].name}</h2>
          <br />
          <p>{ProdList[itemName].details}</p>
          <br />
          <br />
          <h3>Size: XS S M L XL</h3>
          <br />
          <h3>
            Prize: &#8377;. {ProdList[itemName].price}
            &nbsp;&nbsp;&nbsp;&nbsp; Quantity:&nbsp;&nbsp;
            <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={decrease}>-</button>
            <input style={{width: "40px",height: "40px",paddingLeft: "8px",fontSize: "16px",textAlign:"center"}} id="quantity" value="1"/>
            <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={increase}>+</button>
          </h3>
          <br />
          <button className="atcbtn">Add to Cart</button>
        </div>
      </div>
      <hr/><br/>
      <div style={{ backgroundColor: "white" }}>
        <h3 style={{ textAlign: "center" }}>SIMILAR PRODUCTS</h3>
        <div style={{ paddingBottom: "1.3vh" }}>
          <ul
            className="list-items"
            style={{ gridTemplateColumns: "repeat(5,18%)" }}
          >
            {ProdList.slice(0,4).map((item) => {
              var linkto = "/product?name=" + item.name;
              return (
                <li className="list-item" key={item.name}>
                  <div>
                    <img className="itemimg" src={img1} alt="product" />
                  </div>
                  <div>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td colSpan="2">
                            <b>{item.name}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>&#8377; {item.price}</td>
                          <td align="right">
                            <a href={linkto} className="buy">
                              <button className="buybutton">Buy</button>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              );
            })}
            <li style={{ paddingTop: "15vh", color: "red", fontSize: "18px" }}>
              <Link to="/home">View More..</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
