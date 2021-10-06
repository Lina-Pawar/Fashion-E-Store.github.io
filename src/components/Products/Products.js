import "./Products.css";
import ReactDOM from 'react-dom';
import { ProdList } from "./ProdList";
import "../Loader.css";

function Products(props) {
  var x=setInterval(function(){
  if(ProdList.length>0){
    clearInterval(x);
    const Prod = () => {
      return(
        <ul className="list-items">
        {/* eslint-disable-next-line*/}
        {ProdList.map((item,index) => {
          var Filters=item.filters.toLowerCase().split(" ");
          if(((str.match("/home")||str.match("/product")||str.match("/admin")) && index<props.n) || (Filters.indexOf(props.category)>=0 && Filters.indexOf(props.type)>=0)){
            var linkto = "/product?name="+item.name;
            var editlink = "/editproduct?name="+item.name;
            var productname=item.name && item.name.length > 50 ? item.name.slice(0,50).split(' ').slice(0, -1).join(' ') : item.name;
            if (productname!==item.name){
              productname+="..";
            }
            var photo='data:image/JPEG;base64,'+item.image1;
            return (
              <li className="list-item" key={item.name} style={str.match("/admin") && item.quantity===0?{backgroundColor:"red"}:str.match("/admin") && item.quantity<=10?{backgroundColor:"yellow"}:{backgroundColor:"none"}}>
                <div><img className="itemimg" src={photo} alt="product"/></div>
                <div>
                <table width="100%">
                  <tbody>
                  <tr>
                    <td colSpan="2" height="45px" className="productname"><b>{productname}</b></td>
                  </tr>
                  <tr style={{verticalAlign:"bottom"}}>
                    <td className="productprice">Rs. {Number.parseFloat(item.price).toFixed(2)}</td>
                    <td align="right">
                        <button className="buybutton" onClick={()=>window.location.href=str.match("/admin")?editlink:linkto}>{str.match("/admin")?"Edit":"Buy"}</button>
                    </td>
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
    ReactDOM.render(<Prod/>, document.getElementById("Products-list"));
  }
  },500);
  var str=String(window.location.href);
  return (
    <div id="Products-list">
      <div className="spinner"></div>
    </div>
  );
}

export default Products;