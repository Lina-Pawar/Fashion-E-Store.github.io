import React, { useState } from "react";
import Service from "../Service";
import "./ForgotPass.css";


const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const captcha = generateString(6);
const ForgotPass = ({ setToken }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [captchatext, setcaptchatext] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    var inputData = document.getElementById("inputType");
    if(inputData.disabled!==true){
      alert("Verify captcha!");
    }
    else{
      if(password===confirmpassword){
      Service.resetPassword(user).then((resp) => {
        if(resp.data.response===2){
          alert("New password cannot be same as old password!");
        } else if (
          resp.data.response !== 0 &&
          resp.data.response !== undefined &&
          resp.data.response !== null
        ) {
          window.location.href="/";
        } else {
          alert("Incorrect email address!!");
        }
      });  
    }
    else{
      alert("Passwords do not match!");
    }
  }
}

  const verify = e => {
    var element =  document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    var element2 = document.getElementById("resetBtn");
    element.style.backgroundColor ="rgba(0,0,0,0.7)";
    element.innerHTML  = "Checking...";
    element.style.cursor="not-allowed";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function(){
        if(captcha === captchatext)
        {
          element.style.background = "-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))";
          element.style.color ="black"
          element.innerHTML  = "Captcha Verified";
          element.disabled = true;
          element2.style.display="block";
          element.style.fontWeight="bold";
          element2.style.cursor="pointer";
        }
        else
        {
          element.style.backgroundColor = "red";
          element.style.cursor = "not-allowed";
          element.innerHTML  = "Not Matched";
          element.disabled = true;
  
          var myFunction = function(){
            element.style.backgroundColor   = "black";
            element.style.cursor = "pointer";
            element.innerHTML  = "Verify";
            element.disabled = false;
            inputData.disabled = false;
            inputData.value ='';
          };
          setTimeout(myFunction,2000);
        }
      }   
      setTimeout(myFunctions,2000); 
   };
  return (
    <div className="forgotpass" id="fp">
      <br /><br />
      <div className="fp">
        <h2 style={{ textAlign: "center", color: "white" }}>Reset Password</h2>
        <br />
        <form className="fpform" onSubmit={onSubmit}>
          <label className="fplabel">Enter email address:</label>
          <br />
          <input
            className="fpinput"
            type="mailadd"
            id="email"
            required
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email address"
          />
          <br />
          <label className="fplabel">Enter new password:</label>
          <br />
          <input
            className="fpinput"
            type="newpassword"
            id="newpassword"
            required
            onChange={(e) => setpassword(e.target.value)}
            placeholder="New password"
          />
          <br />
          <label className="fplabel">Re-enter new password:</label>
          <br />
          <input
            className="fpinput"
            id="renewpassword"required
            onChange={(e) => setconfirmpassword(e.target.value)}
            placeholder="Confirm new password"
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
            name="captcha"
            autoComplete="off"
            required
            onChange={(e) => setcaptchatext(e.target.value)}
          />
          <div align="center">
          <button className="fpbutton" onClick={(e) => { window.location.href="/";}}>
            Back
          </button>
          <button className="fpbutton" id="succesBTN" onClick={verify}>
            Verify
          </button>
          <br />
          <button className="fpbutton reset" type="submit" id="resetBtn" style={{display:"none"}}>
            Reset Password
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPass;
