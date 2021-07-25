import "./Register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <section className="register">
      <div align="center">
        <div className="reg">
          <form className="regform">
            <label className="reglabel">Name:</label>
            <br />
            <input
              type="text"
              className="reginput1"
              id="fname"
              required="required"
              placeholder="First Name"
            />
            &nbsp;&nbsp;&nbsp;
            <input
              className="reginput2"
              type="text"
              id="lname"
              required="required"
              placeholder="Last Name"
            />
            <br />
            <label className="reglabel">Contact:</label>
            <input className="ip3" value="+91" disabled />
            <input
              className="ip4"
              type="text"
              id="contact"
              required="required"
            />
            <br />
            <label className="reglabel">Email:</label>
            <br />
            <input
              className="reginput"
              type="text"
              id="email"
              required="required"
            />
            <br />
            <label className="reglabel">Gender:</label>
            <br />
            <input
              className="reginput"
              type="radio"
              id="female"
              name="gender"
              value="Female"
            />
            <label className="reglabel">Female</label>
            <input
              className="reginput"
              type="radio"
              id="male"
              name="gender"
              value="Male"
            />
            <label className="reglabel">Male</label>
            <br />
            <label className="reglabel">Username:</label>
            <br />
            <input
              className="reginput"
              type="text"
              id="username"
              required="required"
            />
            <br />
            <label className="reglabel">Password:</label>
            <br />
            <input
              className="reginput"
              type="password"
              id="password"
              required="required"
              placeholder="Atleast 8 characters"
            />
            <br />
            <label className="reglabel">Confirm Password:</label>
            <br />
            <input
              className="reginput"
              id="confirm-password"
              required="required"
              placeholder="Re-enter password"
            />
          </form>
          <br />
          <Link to="/login">
            <button className="regbutton" onclick="login()">
              Back
            </button>
          </Link>
          <button className="regbutton" onclick="login()">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}
export default Register;
