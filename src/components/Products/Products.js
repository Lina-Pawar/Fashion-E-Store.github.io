import "./Products.css";
import { ProdList } from "./ProdList";
function Products() {
  return (
    <ul className="list-items">
      {ProdList.map((item, index) => {
        return (
          <li className="list-item" key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
