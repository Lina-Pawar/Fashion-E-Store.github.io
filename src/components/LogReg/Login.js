import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Service from "../Service";
import "./Login.css";
import logo from "../../imgs/logo.jpg";
import Register from "./Register";

const Login = ({ setToken }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [reg, setReg] = useState(false);

  const handleClick = () => {
    setReg(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    if (username==="Stylezone@admin" && password==="Admin_sz"){
    window.location.href="/admin";
  }
  else{
    Service.login(user).then((resp) => {
      if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        window.localStorage.setItem("fashion-e-store-user",user.username);
        setToken(resp.data.response);
        window.location.href="/home";
      } else {
        alert("Incorrect Username or Password!!");
      }
    });
  }
};
  const [visible, setVisibility] = useState(false);
  const PWInputType = visible ? "text" : "password";
  const Icon = visible ? "far fa-eye-slash" : "far fa-eye";
  if (reg === false) {
  return (
    <Fragment>
      <section className="login">
        <div align="center">
          <div className="log">
            <form className="logform" onSubmit={handleSubmit}>
              <br/>
              <img src={logo} className="img1" alt="try" />
              <br/><br/>
              <input className="loginput" placeholder="Username" required onChange={(e) => setusername(e.target.value)}/>
              <br />
              <div align="left">
              <input className="loginput" id="pw" type={PWInputType} placeholder="Password" required onChange={(e) => setpassword(e.target.value)}/>
              <span className={Icon} onClick={() => setVisibility((visibility) => !visibility)}/>
              </div>
            <Link to="/changepassword"><label className="pwlabel">Forgot password?</label></Link>
            <br />
            <button className="logbutton" type="submit">Login</button>
            <button className="logbutton" onClick={handleClick}>Register</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
} else {
  return <Register setToken={setToken} />;
}
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
