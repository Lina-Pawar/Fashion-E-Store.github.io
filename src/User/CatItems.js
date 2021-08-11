import { React } from "react";
import { Link } from "react-router-dom";
import "./CatItems.css";
function CatItems() {
  return (
    <div className="catitems">
      <br />
      <h2 style={{textAlign:"center",textDecoration:"none",paddingLeft:0}}>Categories</h2>
      <h2>Clothing&nbsp;<i className="fas fa-tshirt"></i></h2>
      <hr />
        <Link to="/men?cat=clothing">
          <div className="catimg" id="one">
            <h3><b>Men Clothing</b></h3>
          </div>
        </Link>
        <Link to="/women?cat=clothing">
          <div className="catimg" id="two">
            <h3><b>Women Clothing</b></h3>
          </div>
        </Link>
        <Link to="/kids?cat=clothing">
          <div className="catimg" id="three">
            <h3><b>Kids Clothing</b></h3>
          </div>
        </Link> 
      <h2>Accessories&nbsp;<i className="fab fa-redhat"></i></h2>
      <hr />
      <Link to="/men?cat=accessories">
          <div className="catimg" id="four">
            <h3><b>Men Accessories</b></h3>
          </div>
        </Link>
        <Link to="/women?cat=accessories">
          <div className="catimg" id="five">
            <h3><b>Women Accessories</b></h3>
          </div>
        </Link>
        <Link to="/kid?cat=accessories">
          <div className="catimg" id="six">
            <h3><b>Kids Accessories</b></h3>
          </div>
        </Link> 
      <h2>Footwear&nbsp;<i className="fas fa-shoe-prints"></i></h2>
      <hr />
      <Link to="/men?cat=footwear">
          <div className="catimg" id="seven">
            <h3><b>Men Footwear</b></h3>
          </div>
        </Link>
        <Link to="/women?cat=footwear">
          <div className="catimg" id="eight">
            <h3><b>Women Footwear</b></h3>
          </div>
        </Link>
        <Link to="/kids?cat=footwear">
          <div className="catimg" id="nine">
            <h3><b>Kids Footwear</b></h3>
          </div>
        </Link> 
    </div>
  );
}

export default CatItems;
