import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../imgs/logo.jpg";


function Login() {
  return (
    <Fragment>
      <section className="login">
        <div align="center">
          <div className="log">
            <form className="logform">
              <div align="center">
                <img src={logo} className="img1" alt="try" />
                <br />
              </div>
              <input
                className="loginput"
                placeholder="Username"
                required="required"
              />
              <br />
              <input
                className="loginput"
                id="pw"
                type="password"
                placeholder="Enter Password"
                required="required"
              />
              <span class="show-btn">
                <i class="fas fa-eye"></i>
              </span>
            </form>
            <br />
            <Link to="/home">
              <button className="logbutton" onclick="login()">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="logbutton" onclick="login()">
                Register
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Login;
