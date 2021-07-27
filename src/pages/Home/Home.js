import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        Fashion E-store <i className="fas fa-tshirt"></i>
      </h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
export default Home;
