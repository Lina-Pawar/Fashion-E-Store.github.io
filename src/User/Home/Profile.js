import React, {useState} from "react";
import "./Profile.css";
import Service from "../../components/Service";

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
              required
              onChange={(e) => setfname(e.target.value)}
              placeholder="First Name"
            />
            <input
              className="reginput2 profileinput"
              type="text"
              id="lname"
              required
              onChange={(e) => setlname(e.target.value)}
              placeholder="Last Name"
            />
            <br/>
            <label className="reglabel profilelabel">Contact:</label>
            <input className="ip3" value="+91" disabled />
            <input
              className="ip4"
              type="text"
              id="contact"
              required
              onChange={(e) => setcontact(e.target.value)}
            />
            <br/>
            <label className="reglabel profilelabel">Email:</label>
            <input
              className="reginput profileinput1"
              type="text"
              id="email"
              required
              onChange={(e) => setemail(e.target.value)}
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
              onChange={(e) => setgender(e.target.value)}
            />
            <label className="reglabel profilelabel">Female</label>
            <input
              className="regradio"
              type="radio"
              id="male"
              name="gender"
              value="Male"
              required
              onChange={(e) => setgender(e.target.value)}
            />
            <label className="reglabel profilelabel">Male</label>
            <br/><br/>
            <label className="reglabel profilelabel">Username:</label>
            <input
              className="reginput profileinput2"
              type="text"
              id="username"
              required
              onChange={(e) => setusername(e.target.value)}
            />
            <br/>
          <div align="center">
            <button className="regbutton updatepw" onClick={(e) => { window.location.href="/changepassword";}}>Change Password</button><br></br>
            <button className="regbutton">Edit</button>
            <button className="regbutton" type="submit">Update</button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;