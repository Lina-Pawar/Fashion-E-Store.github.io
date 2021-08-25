import {CustList} from "./CustList";
import "./Customers.css";
function Customers() {
  return (
    <div className="custdetails">
      <br />
      <table>
        <tbody>
          <colgroup>
            <col style={{ width: "3%" }}></col>
            <col style={{ width: "20%" }}></col>
            <col style={{ width: "20%" }}></col>
            <col style={{ width: "25%" }}></col>
            <col style={{ width: "25%" }}></col>
            <col style={{ width: "17%" }}></col>
          </colgroup>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL ID</th>
            <th>CONTACT</th>
            <th>DETAILS</th>
          </tr>

          {CustList.map((pers) => {
            return (
              <tr>
                <td style={{ textAlign: "center" }}>{pers.id}</td>
                <td>{pers.firstname}</td>
                <td>{pers.lastname}</td>
                <td>{pers.email}</td>
                <td style={{ textAlign: "center" }}>{pers.contact}</td>
                <td style={{ textAlign: "center" }}>
                  <button className="viewbtn">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
