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
            <div><img className="itemimg" src={demo} alt="product"/></div>
            <div>
            <table width="100%">
              <tbody>
              <tr>
                <td colSpan="2"><b>{item.name}</b></td>
              </tr>
              <tr>
                <td>&#8377; {item.price}</td>
                <td align="right"><Link to="/productdetails" className="buy"><button className="buybutton">Buy</button></Link></td>
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
