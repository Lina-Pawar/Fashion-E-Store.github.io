import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import CatItems from "../CatItems";
import Products from "../../components/Products/Products";
import "./Home.css";
function Home() {
  
  return (
    <div className="homecontent">
      <div style={{background:"-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
      height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
      <Navbar />
      </div>
      <div className="home">
        <div className="category">
          <CatItems />
        </div>
        <div className="content">
          <Carousel />
          <Products />
        </div>
      </div>
    </div>
  );
}
export default Home;
