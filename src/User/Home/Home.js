import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Carousel from "./Carousel";
import CategoryItems from "../CategoryItems";
import ReactDOM from 'react-dom';
import Footer from "../Home/Footer";
import Chatbox from "../../components/Chatbox";
import "./Home.css";
import Service from "../../components/Service";

function Home() {
  var TProducts=[];
  Service.trending({uname:window.localStorage.getItem("fashion-e-store-user")}).then((resp) =>{
    if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        const values=resp.data.response;
        // eslint-disable-next-line
        const productsdetails=values.map((productsdetails)=>{
            TProducts.push(productsdetails);
            return productsdetails;
          });
    } else {
        alert("Error");
    }
  });
  const [isCatVisible, setCatVisibility] = useState(false);
  const CategorySlide = isCatVisible ? "showcategory" : "hidecategory";
  const slidearrow = isCatVisible ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right";
  window.scroll(0,0);
  var x=setInterval(function(){
    if(TProducts.length>0){
      clearInterval(x);
      const Prod = () => {
        return(
          <ul className="list-items">
          {/* eslint-disable-next-line*/}
          {TProducts.map((item) => {
            var linkto = "/product?name="+item.name;
            var productname=item.name && item.name.length > 50 ? item.name.slice(0,50).split(' ').slice(0, -1).join(' ') : item.name;
            if (productname!==item.name){
              productname+="..";
            }
            var photo='data:image/JPEG;base64,'+item.image1;
              return (
                <li className="list-item" key={item.name}>
                  <div><img className="itemimg" src={photo} alt="product"/></div>
                  <div>
                  <table width="100%">
                    <tbody>
                    <tr>
                      <td colSpan="2" height="45px" className="productname"><b>{productname}</b></td>
                    </tr>
                    <tr style={{verticalAlign:"bottom"}}>
                      <td className="productprice">Rs. {Number.parseFloat(item.price).toFixed(2)}</td>
                      <td align="right">
                          <button className="buybutton" onClick={()=>window.location.href=linkto}>Buy</button>
                      </td>
                  </tr>
                    </tbody>
                  </table>
                  </div>
                </li>
              );
          })}
        </ul>
      );
      }
      ReactDOM.render(<Prod/>, document.getElementById("trending-products"));
    }
    },500);
  return (
    <div className="homecontent">
      <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"10"}}>
      <Navbar/>
      </div>
      <div className="home">
        <div className="category">
          <CategoryItems/>
        </div>
        <div className={CategorySlide}>
          <CategoryItems/>
        </div>
        <span className="sarrow" onClick={() => setCatVisibility((visible) => !visible)}>
            <i className={slidearrow}></i>
          </span>
        <div className="content">
          <div className="cont1"><Carousel/></div>
          <h2 style={{textAlign:"center"}}><b>TRENDING PRODUCTS</b></h2>
          <div className="cont2" id="trending-products">
            <div className="spinner"></div>
          </div>
          <Chatbox/>
        </div>
      </div>
      <div className="homefooter" id="#contactus">
        <Footer/>
      </div>
    </div>
  );
}
export default Home;
