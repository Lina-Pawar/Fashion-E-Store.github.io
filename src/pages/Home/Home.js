import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
function Home() {
  return (
    <div>
      <Navbar/>
      <h1>
        Fashion E-store <i className="fas fa-tshirt"></i>
      </h1>
      <Link to="/login">Login</Link>
      <Carousel/>
    </div>
  );
}
export default Home;
