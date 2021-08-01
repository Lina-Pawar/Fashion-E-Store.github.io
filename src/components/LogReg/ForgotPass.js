import React, { useState } from "react";
import "./ForgotPass.css";

function ForgotPass() {
  const characters = "abc123";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const captcha = generateString(6); // Function called here and save in captcha variable
  // kal karunga
  const [visible, setVisibility] = useState(false);
  const Icon = visible ? "fas fa-check" : "fas fa-times";
  //
  return (
    <div className="forgotpass" id="fp">
      <br /><br />
      <div className="fp">
        <h2 style={{ textAlign: "center", color: "white" }}>Reset Password</h2>
        <br />
        <form className="fpform">
          <label className="fplabel">Enter Mail Address:</label>
          <br />
          <input
            className="fpinput"
            type="mailadd"
            id="mailadd"
            required="required"
            placeholder="Enter Email Address"
          />
          <br />
          <label className="fplabel">Enter New Password:</label>
          <br />
          <input
            className="fpinput"
            type="newpassword"
            id="newpassword"
            required="required"
            placeholder="Enter New Password"
          />
          <br />
          <label className="fplabel">Re-Enter New Password:</label>
          <br />
          <input
            className="fpinput"
            id="renewpassword"
            required="required"
            placeholder="Re-enter New password"
          />
          <br />
          <div className="captcha">
            <h2 id="captcha">{captcha}</h2>
          </div>
          <input
            type="text"
            id="inputType"
            className="fpinput"
            placeholder="Enter Captcha"
            name="username"
            autoComplete="off"
          />
          <span
            className={Icon}
            onClick={() => setVisibility((visibility) => !visibility)}
          />
          <button className="fpbutton" onClick="login()">
            Verify
          </button>
          <button className="fpbutton" onClick="login()">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
export default ForgotPass;
