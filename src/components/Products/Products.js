import "./Products.css";
import { Link } from "react-router-dom";
import { ProdList } from "./ProdList";

function Products(props) {
  var str=String(window.location.href);
  return (
    <ul className="list-items">
      {/* eslint-disable-next-line*/}
      {ProdList.map((item,index) => {
        var Filters=item.filters.toLowerCase().split(" ");
        if(((str.match("/home")||str.match("/product")||str.match("/admin")) && index<props.n) || (Filters.indexOf(props.category)>=0 && Filters.indexOf(props.type)>=0)){
          var linkto = "/product?name="+item.name;
          var productname=item.name && item.name.length > 50 ? item.name.slice(0,50).split(' ').slice(0, -1).join(' ') : item.name;
          if (productname!==item.name){
            productname+="..";
          }
          var photo='data:image/JPEG;base64,'+item.image1;
          return (
            <li className="list-item" key={item.name}>
              <div><img className="itemimg" src={photo} alt="product"/></div>
              <div>
              <table width="100%">
                <tbody>
                <tr>
                  <td colSpan="2" height="45px"><b>{productname}</b></td>
                </tr>
                <tr style={{verticalAlign:"bottom"}}>
                  <td>Rs. {Number.parseFloat(item.price).toFixed(2)}</td>
                  <td align="right"><Link to={str.match("/admin")?"/editproduct":linkto} className="buy"><button className="buybutton">{str.match("/admin")?"Edit":"Buy"}</button></Link></td>
                </tr>
                </tbody>
              </table>
              </div>
            </li>
          );
      }})}
    </ul>
  );
}

export default Products;