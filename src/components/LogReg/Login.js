import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../imgs/logo.jpg";

function Login() {
  const [visible, setVisibility] = useState(false);
  const PWInputType = visible ? "text" : "password";
  const Icon = visible ? "far fa-eye-slash" : "far fa-eye";

  return (
    <Fragment>
      <section className="login">
        <div align="center">
          <div className="log">
            <form className="logform">
              <div align="center">
                <img src={logo} className="img1" alt="try" />
              </div>
                <br />
              <input
                className="loginput"
                placeholder="Username"
                required="required"
              />
              <br />
              <input
                className="loginput"
                id="pw"
                type={PWInputType}
                placeholder="Password"
                required="required"
              />
              <span
                className={Icon}
                onClick={() => setVisibility((visibility) => !visibility)}
              />
            </form>
            <Link to="/passwordrecovery">
              <label className="pwlabel">Forgot password?</label>
            </Link>
            <br />
            <Link to="/home">
              <button className="logbutton" >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="logbutton" >
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
