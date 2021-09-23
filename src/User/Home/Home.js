import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Carousel from "./Carousel";
import CategoryItems from "../CategoryItems";
import Products from "../../components/Products/Products";
import Footer from "../Home/Footer";
import Chatbox from "../../components/Chatbox";
import "./Home.css";

function Home() {
  const [isCatVisible, setCatVisibility] = useState(false);
  const CategorySlide = isCatVisible ? "showcategory" : "hidecategory";
  const slidearrow = isCatVisible ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right" ;
  window.scroll(0,0);
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
          <div className="cont2">
            <Products n={12}/>
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
