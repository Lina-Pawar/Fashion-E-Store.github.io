import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import CatItems from "../CatItems";
import Products from "../../components/Products/Products";
import "./Home.css";
function Home() {
  
  return (
    <div className="homecontent">
      <div>
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
