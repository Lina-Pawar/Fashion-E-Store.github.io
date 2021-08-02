import React, { useState } from "react";
import "./ForgotPass.css";
import { Link } from "react-router-dom";
function ForgotPass() {
  const [user, setUser] = useState({
    username:""
});
let handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  user[name] = value;
  setUser(user);
}

const onSubmit = e => {

 var element =  document.getElementById("succesBTN");
 var inputData = document.getElementById("inputType");
  
  element.style.backgroundColor ="rgba(0,0,0,0.7)";
  element.innerHTML  = "Checking...";
  element.style.cursor="not-allowed";
  inputData.disabled = true;
  element.disabled = true;

   var myFunctions = function(){
       if(captcha === user.username)
       {
         element.style.background   = "-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))";
         element.style.color ="black"
         element.innerHTML  = "Captcha Verified";
         element.disabled = true;
         element.style.cursor = "not-allowed";
         element.style.fontWeight="bold";
       }
       else
       {
         element.style.backgroundColor   = "red";
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
         setTimeout(myFunction,3000);
       }
     }   
     setTimeout(myFunctions,3000); 
};

  const characters = "abc123";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const captcha = generateString(6); 
  
  
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
            name="username"  onChange={handleChange}
            autoComplete="off"
          />
          
          <Link to="/login">
            <button className="fpbutton" onClick="login()">
              Back
            </button>
          </Link>
          <button className="fpbutton" id="succesBTN" onClick={onSubmit}>
            Verify
          </button>
          <br />
          <button className="fpbutton" style={{maxWidth:"440px"}}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ForgotPass;
