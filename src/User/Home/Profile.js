import React, {useState} from "react";
import "./Profile.css";
import Service from "../../components/Service";

var username=window.localStorage.getItem("fashion-e-store-user");
const profiledetails=[];
const user={ username:username };
Service.userinfo(user).then((resp) => {
  if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
    const values=resp.data.response;
    const dets=values.map((dets)=>{
      profiledetails.push(dets['firstname'],dets['lastname'],dets['contact'],dets['email'],dets['gender'],dets['username']);
      return dets;
    });
  }
});
function Profile() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [username, setusername] = useState("");  
  const handleSubmit = (e) => {
    e.preventDefault();
      var user = {fname:fname,lname:lname,contact:contact,email:email,gender:gender,username:username};
      Service.register(user).then((resp) => {
        if (resp.data.response === 1) {
          user = {
            username: username,
          };
          Service.login(user).then((resp) => {
            if (
              resp.data.response !== 0 &&
              resp.data.response !== undefined &&
              resp.data.response !== null
            ) {
              window.localStorage.setItem(
                "fashion-e-store-user",
                user.username
              );
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
  };
  
  function gendervalue(val){
    var g=profiledetails[4];
    if(g===val){
      return true;
    }
    else{
      return false;
    }
  };
  function edit(){
    document.getElementById("fname").disabled=false;
    document.getElementById("lname").disabled=false;
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
    document.getElementById("username").disabled=false;
  }
  return (
    <section className="register">
      <div>
        <br/>
        <div className="reg editprofile">
          <form className="regform" onSubmit={handleSubmit}>
            <label className="reglabel profilelabel">Name:</label>
            <input
              type="text"
              className="reginput1 profileinput"
              id="fname"
              value={profiledetails[0]}
              required
              onChange={(e) => setfname(e.target.value)}
              placeholder="First Name"
              disabled
            />
            <input
              className="reginput2 profileinput"
              type="text"
              id="lname"
              value={profiledetails[1]}
              required
              onChange={(e) => setlname(e.target.value)}
              placeholder="Last Name"
              disabled
            />
            <br/>
            <label className="reglabel profilelabel">Contact:</label>
            <input className="ip3" value="+91" disabled />
            <input
              className="ip4"
              type="text"
              id="contact"
              value={profiledetails[2]}
              required
              onChange={(e) => setcontact(e.target.value)}
              disabled
            />
            <br/>
            <label className="reglabel profilelabel">Email:</label>
            <input
              className="reginput profileinput1"
              type="text"
              id="email"
              value={profiledetails[3]}
              required
              onChange={(e) => setemail(e.target.value)}
              disabled
            />
            <br/>
            <label className="reglabel profilelabel">Gender:</label>
            <input
              className="regradio"
              type="radio"
              id="female"
              name="gender"
              value="Female"
              required
              checked={gendervalue("Female")}
            />
            <label className="reglabel profilelabel">Female</label>
            <input
              className="regradio"
              type="radio"
              id="male"
              name="gender"
              value="Male"
              required
              checked={gendervalue("Male")}
            />
            <label className="reglabel profilelabel">Male</label>
            <br/><br/>
            <label className="reglabel profilelabel">Username:</label>
            <input
              className="reginput profileinput2"
              type="text"
              id="username"
              required
              value={profiledetails[5]}
              onChange={(e) => setusername(e.target.value)}
              disabled
            />
            <br/>
          <div align="center">
            <button className="regbutton updatepw" onClick={(e) => { window.location.href="/changepassword";}}>Change Password</button><br></br>
            <button className="regbutton" onClick={edit}>Edit</button>
            <button className="regbutton" type="submit">Update</button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;