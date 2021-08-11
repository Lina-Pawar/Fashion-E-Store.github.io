import "./Products.css";
import { ProdList } from "./ProdList";
import { Link } from "react-router-dom";

function Products() {
  const Prod=ProdList.map((item, index) => {
    var linkto = "/product?id="+item.id;
    return (
  
      <li className="list-item" key={item.id}>
        <div><img className="itemimg" src={item.image} alt="product"/></div>
        <div>
        <table width="100%">
          <tbody>
          <tr>
            <td colSpan="2"><b>{item.name}</b></td>
          </tr>
          <tr>
            <td>&#8377; {item.price}</td>
            <td align="right"><Link to={linkto} className="buy"><button className="buybutton">Buy</button></Link></td>
          </tr>
          </tbody>
        </table>
        </div>
      </li>
    );
  })
  return (
    <ul className="list-items">
      {Prod}
    </ul>
  );
}

export default Products;
