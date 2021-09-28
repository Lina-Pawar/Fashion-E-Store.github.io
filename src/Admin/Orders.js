import {OrderList} from "./OrderList";
import ReactDOM from 'react-dom';
import "./Orders.css";
import "../components/Loader.css";

function Orders() {
  var x=setInterval(function(){
    if(OrderList.length>0){
      const Prod = () => {
        return(
        OrderList.map((pers) => {
            return (
              <tr>
                <td style={{ textAlign: "center" }}>{pers.order_id}</td>
                <td>{pers.username}</td>
                <td>{pers.product}</td>
                <td>{pers.size}</td>
                <td>{pers.price}</td>
                <td>{pers.quantity}</td>
                <td>{pers.date}</td>
                <td>{pers.address}</td>
                <td>{pers.pincode}</td>
              </tr>
            );
          })
        );
    }
    clearInterval(x);
    ReactDOM.render(<Prod/>, document.getElementById("order-table"));
  }
},500);
  
  return (
    <div className="orderdetails">
      <br />
      <table id="order-table">
        <div className="spinner"></div>
      </table>
    </div>
  );
}
export default Orders;
