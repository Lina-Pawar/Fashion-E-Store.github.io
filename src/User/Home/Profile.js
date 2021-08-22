import React, {useState} from "react";
import "./Profile.css";
import Service from "../../components/Service";

var username=window.localStorage.getItem("fashion-e-store-user");
const user={ username:username };
Service.userinfo(user).then((resp) => {
  if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
      const profiledetails=resp.data.response;
      try{
          document.getElementById("fname").value=profiledetails['firstname'];
          document.getElementById("lname").value=profiledetails['lastname'];
          document.getElementById("contact").value=profiledetails['contact'];
          document.getElementById("email").value=profiledetails['email'];
          document.getElementById("username").value=profiledetails['username'];
          if(profiledetails['gender']==="Female"){
            document.getElementById("female").checked=true;
          }else{
            document.getElementById("male").checked=true;
          }
      }catch(e){
        console.log(e instanceof TypeError);
      };
  }
});
function Profile() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [newusername, setnewusername] = useState(username);
  const handleSubmit = (e) => {
    e.preventDefault();
      var user = {fname:fname,lname:lname,contact:contact,email:email,newusername:newusername,username:username};
      Service.update(user).then((resp) => {
        if(resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
          alert("Profile updated!");
          window.localStorage.setItem("fashion-e-store-user",user.newusername);
          window.location.href="/home";
        }
      });
  };
  return (
    <section className="register">
      <div>
        <br/>
        <div className="reg editprofile">
          <form className="regform" onSubmit={handleSubmit}>
            <label className="reglabel profilelabel">Name:</label>
            <input type="text" className="reginput1 profileinput" id="fname" required onChange={(e) => setfname(e.target.value)} placeholder="First Name"/>
            <input className="reginput2 profileinput" type="text" id="lname" required onChange={(e) => setlname(e.target.value)} placeholder="Last Name"/>
            <br/>
            <label className="reglabel profilelabel">Contact:</label>
            <input className="ip3" value="+91" />
            <input className="ip4" type="text" id="contact" required onChange={(e) => setcontact(e.target.value)}/>
            <br/>
            <label className="reglabel profilelabel">Email:</label>
            <input className="reginput profileinput1" type="text" id="email" required onChange={(e) => setemail(e.target.value)}/>
            <br/>
            <label className="reglabel profilelabel">Gender:</label>
            <input className="regradio" type="radio" id="female" name="gender" value="Female" required/>
            <label className="reglabel profilelabel">Female</label>
            <input className="regradio" type="radio" id="male" name="gender" value="Male" required/>
            <label className="reglabel profilelabel">Male</label>
            <br/><br/>
            <label className="reglabel profilelabel">Username:</label>
            <input className="reginput profileinput2" type="text" id="username" required onChange={(e) => setnewusername(e.target.value)}/>
            <br/>
          <div align="center">
            <button className="regbutton" onClick={(e) => { window.location.href="/changepassword";}}>Change Password</button>
            <button className="regbutton" type="submit">Update</button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;