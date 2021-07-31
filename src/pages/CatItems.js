import { React } from "react";
import { Link } from "react-router-dom";
import "./CatItems.css";
function CatItems() {
  return (
    <div className="catitems">
      <br />
      <h1>Categories</h1>
      <br />
      <h2>
        Clothing&nbsp;<i className="fas fa-tshirt"></i>
      </h2>
      <br />
      <hr />
      <br />
      <ul>
        <h3>
          <li>
            <Link to="/men">
              <label>Men</label>
            </Link>
          </li>
        </h3>
        <br />
        <h3>
          <li>
            <Link to="/women">
              <label>Women</label>
            </Link>
          </li>
        </h3>
        <br />
        <h3>
          <li>
            <Link to="/kids">
              <label>Kids</label>
            </Link>
          </li>
        </h3> 
      </ul>
      <br />
      <h2>
        Accessories&nbsp;<i className="fab fa-redhat"></i>
      </h2>
      <br />
      <hr />
      <br />
      <ul>
        <h3>
          <li>
            <Link to="/men">
              <label>Men</label>
            </Link>
          </li>
        </h3>
        <br />
        <h3>
          <li>
            <Link to="/women">
              <label>Women</label>
            </Link>
          </li>
        </h3>
        <br />
        <h3>
          <li>
            <Link to="/kids">
              <label>Kids</label>
            </Link>
          </li>
        </h3>
      </ul>
      <br />
      <h2>
        Footwear&nbsp;<i className="fas fa-shoe-prints"></i>
      </h2>
      <br />
      <hr />
      <br />
      <ul>
        <h3>
          <li>
            <Link to="/men">
              <label>Men</label>
            </Link>
          </li>
        </h3>
        <br />
        <h3>
          <li>
            <Link to="/women">
              <label>Women</label>
            </Link>
          </li>
        </h3>
        <br />
        <h3>
          <li>
            <Link to="/kids">
              <label>Kids</label>
            </Link>
          </li>
        </h3>
        <br />
      </ul>
    </div>
  );
}

export default CatItems;
