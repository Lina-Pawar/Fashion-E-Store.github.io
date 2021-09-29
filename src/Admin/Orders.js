import {OrderList} from "./OrderList";
import ReactDOM from 'react-dom';
import "./Orders.css";
import "../components/Loader.css";
import Service from "../components/Service";

function Orders() {
  function deliver(val){
    var r=window.confirm("Do you want to update Order id "+val+" as delivered?");
    if (r===true) {
      Service.deliver({id:val}).then((resp) =>{
        if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
          alert("Updated!");
          window.location.reload();
        }
        else{
            alert("Error");
        }
    }); 
    }
  }
  var x=setInterval(function(){
    if(OrderList.length>0){
      const Prod = () => {
        return(
          <>
          <tr>
            <th>Order Id</th>
            <th>Username</th>
            <th>Product</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Delivery</th>
          </tr>
        {OrderList.map((item) => {
            return (
              <tr onClick={()=>deliver(item.order_id)}>
                <td style={{ textAlign: "center" }}>{item.order_id}</td>
                <td>{item.username}</td>
                <td>{item.product}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>{item.address}</td>
                <td>{item.pincode}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
          </>
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
