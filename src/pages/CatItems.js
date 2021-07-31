import { React } from "react";
import { Link } from "react-router-dom";
import "./CatItems.css";
function CatItems() {
  return (
    <div className="catitems">
      <br />
      <h2>Categories</h2>
      <h2>Clothing&nbsp;<i className="fas fa-tshirt"></i></h2>
        <h3><Link to="/men"><label>Men</label></Link></h3>
        <h3><Link to="/women"><label>Women</label></Link></h3>
        <h3><Link to="/kids"><label>Kids</label></Link></h3> 
      <h2>Accessories&nbsp;<i className="fab fa-redhat"></i></h2>
        <h3><Link to="/men"><label>Men</label></Link></h3>
        <h3><Link to="/women"><label>Women</label></Link></h3>
        <h3><Link to="/kids"><label>Kids</label></Link></h3>
      <h2>Footwear&nbsp;<i className="fas fa-shoe-prints"></i></h2>
        <h3><Link to="/men"><label>Men</label></Link></h3>
        <h3><Link to="/women"><label>Women</label></Link></h3>
        <h3><Link to="/kids"><label>Kids</label></Link></h3>
    </div>
  );
}

export default CatItems;
