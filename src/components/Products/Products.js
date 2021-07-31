import "./Products.css";
import { ProdList } from "./ProdList";
import { Link } from "react-router-dom";
import demo from "../../imgs/c1.png";
function Products() {
  return (
    <ul className="list-items">
      {ProdList.map((item, index) => {
        return (
          <li className="list-item" key={item.id}>
            <img src={demo} alt="product"/>
            <table width="100%">
              <tbody>
              <tr>
                <td colSpan="2">{item.name}</td>
              </tr>
              <tr>
                <td>Rs. {item.price}</td>
                <td align="right"><Link to="/productdetails" className="buy"><button className="buybutton">Buy</button></Link></td>
              </tr>
              </tbody>
            </table>
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
