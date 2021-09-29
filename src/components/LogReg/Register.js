import "./Register.css";
import { useState } from "react";
import Service from "../Service";
import PropTypes from "prop-types";

const Register = ({ setToken }) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const validate = () => {
    var passReg = {
      upper: /[A-Z]/,
      lower: /[a-z]/,
      number: /[0-9]/,
      space: /\s/,
      min8: /.{8,}/,
    };
    if (
      !(
        passReg.upper.test(password) &&
        passReg.lower.test(password) &&
        passReg.number.test(password) &&
        !passReg.space.test(password) &&
        passReg.min8.test(password)
      )
    ) {
      alert(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number Required!! No spaces allowed!!"
      );
      return 0;
    } else if (
      confirmpassword !== password) {
      alert("Passwords don't match!!");
      return 0;
    } else if (!email.match(/.+@.+\..+/)) {
      alert("Invalid Email Format!!");
      return 0;
    } else {
      return 1;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() !== 0) {
      var user = {fname:fname,lname:lname,contact:contact,email:email,gender:gender,username:username,password:password};

      Service.register(user).then((resp) => {
        if (resp.data.response === 1) {
          user = {
            username: username,
            password: password,
          };
          Service.login(user).then((resp) => {
            if (
              resp.data.response !== 0 &&
              resp.data.response !== undefined &&
              resp.data.response !== null
            ) {
              window.localStorage.setItem("fashion-e-store-user",user.username);
              setToken(resp.data.response);
              alert("Registration successful!")
              window.location.href="/home";
            } else {
              alert("Some Error Occurred!!");
            }
          });
        } else {
          alert("Error Occurred!!");
        }
      });
    }
  };

  return (
    <section className="register">
      <div>
        <br/>
        <div className="reg">
          <form className="regform" onSubmit={handleSubmit}>
            <label className="reglabel">Name:</label>
            <br/>
            <input type="text" className="reginput1" id="fname" required onChange={(e) => setfname(e.target.value)} autoComplete="off" placeholder="First Name"/>
            <input className="reginput2" type="text" id="lname" required onChange={(e) => setlname(e.target.value)} autoComplete="off" placeholder="Last Name"/>
            <br/>
            <label className="reglabel">Contact:</label>
            <br/>
            <input className="ip3" value="+91" disabled />
            <input className="ip4" type="text" id="contact" required autoComplete="off" onChange={(e) => setcontact(e.target.value)}/>
            <br/>
            <label className="reglabel">Email:</label>
            <br/>
            <input className="reginput" type="text" id="email" autoComplete="off" required onChange={(e) => setemail(e.target.value)}/>
            <br/>
            <label className="reglabel">Gender:</label>
            <br/>
            <input className="regradio" type="radio" id="female" name="gender" value="Female" required onChange={(e) => setgender(e.target.value)}/>
            <label className="reglabel">Female</label>
            <input className="regradio" type="radio" id="male" name="gender" value="Male" required onChange={(e) => setgender(e.target.value)}/>
            <label className="reglabel">Male</label>
            <br/>
            <label className="reglabel">Username:</label>
            <br/>
            <input className="reginput" type="text" id="username" autoComplete="off" required onChange={(e) => setusername(e.target.value)} />
            <br/>
            <label className="reglabel">Password:</label>
            <br/>
            <input className="reginput" type="password" id="password" autoComplete="off" required onChange={(e) => setpassword(e.target.value)} placeholder="Atleast 8 characters"/>
            <br/>
            <label className="reglabel">Confirm Password:</label>
            <br/>
            <input className="reginput" type="password" id="confirmpassword" autoComplete="off" required onChange={(e) => setconfirmpassword(e.target.value)} placeholder="Re-enter password"
            />
          <br/>
          <div align="center">
          <button className="regbutton" onClick={(e) => { window.location.reload();}}>
            Back
          </button>
          <button className="regbutton" type="submit">
            Register
          </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Register;
