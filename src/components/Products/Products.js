import "./Products.css";
import { Link } from "react-router-dom";
import { ProdList } from "./ProdList";
import img1 from "../../imgs/c1.png"

function Products() {
  var n;
  var str=String(window.location.href);
  if(str.match("/home")){
    n=12;
  }else if(str.match("/product")){
    n=4;
  }else{
    n=20;
  }
  return (
    <ul className="list-items">
      {ProdList.slice(0,n).map((item) => {
        var linkto = "/product?name="+item.name;
        return (
          <li className="list-item" key={item.name}>
            <div><img className="itemimg" src={img1} alt="product"/></div>
            <div>
            <table width="100%">
              <tbody>
              <tr>
                <td colSpan="2"><b>{item.name}</b></td>
              </tr>
              <tr>
                <td>Rs. {item.price}</td>
                <td align="right"><Link to={linkto} className="buy"><button className="buybutton">Buy</button></Link></td>
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

export default Products;