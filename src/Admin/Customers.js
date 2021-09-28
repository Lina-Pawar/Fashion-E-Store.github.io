import {CustList} from "./CustList";
import ReactDOM from 'react-dom';
import "./Customers.css";
import "../components/Loader.css";

function Customers() {
  var x=setInterval(function(){
    if(CustList.length>0){
      const Prod = () => {
        return(
          <>
          <th>No.</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Contact</th>
        {CustList.map((pers) => {
            return (
              <tr>
                <td style={{ textAlign: "center" }}>{pers.id}</td>
                <td>{pers.firstname}</td>
                <td>{pers.lastname}</td>
                <td>{pers.email}</td>
                <td style={{ textAlign: "center" }}>{pers.contact}</td>
              </tr>
            );
          })}
          </>
        );
    }
    clearInterval(x);
    ReactDOM.render(<Prod/>, document.getElementById("customer-table"));
  }
},500);
  
  return (
    <div className="custdetails">
      <br />
      <table id="customer-table">
        <div className="spinner"></div>
      </table>
    </div>
  );
}
export default Customers;
