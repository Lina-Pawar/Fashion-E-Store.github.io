//import {CustList} from "./CustList";
import "./Customers.css";
function Customers() {
  const CustList = [
    {
      id: 1,
      fname: "Amit",
      lname: "Naik",
      email: "anaik@gmail.com",
      contact: "8779624030",
    },
    {
      id: 2,
      fname: "Lina",
      lname: "Pawar",
      email: "lpawar@gmail.com",
      contact: "8779624030",
    },
    {
      id: 3,
      fname: "Sid",
      lname: "Roy",
      email: "sroy@gmail.com",
      contact: "8779624030",
    },
  ];
  return (
    <div className="custdetails">
      <h1 style={{ textAlign: "center" }}>Customers</h1>
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

          {CustList.map((pers, index) => {
            return (
              <tr>
                <td style={{ textAlign: "center" }}>{pers.id}</td>
                <td>{pers.fname}</td>
                <td>{pers.lname}</td>
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
