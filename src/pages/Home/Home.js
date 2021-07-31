import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "./Home.css";
import CatItems from "../CatItems";
import Products from "../../components/Products/Products";
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
