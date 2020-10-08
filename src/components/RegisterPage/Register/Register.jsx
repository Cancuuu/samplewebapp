import React, { Fragment, useState } from "react";
import "./Register.css";
import {
  auth,
  storage,
} from "/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/firebase.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pic, setPic] = useState(null);

  const uploadPic = e => {
    setPic(e.target.files[0]);
  };

  const logInUser = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(auth => {
        storage().ref("users/" + auth.user.uid + "/profile.jpg").put(pic)
          .then(() => {
            console.log("YES! YES! YES!");
          });
      })
      .catch(err => {
        console.log("NO! NO! NO!");
      })
      .then(res => alert("User Created"))
      .catch(err => console.log(err));
  };

  return (
    <Fragment>
      <div className="form_div">
        <form onSubmit={logInUser} className="form" action="">
          <div className="form__group field">
            <input
              onChange={e => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form__field"
              name="name"
              id="name"
              required
            />
            <label className="form__label">Email</label>
          </div>
          <div className="form__group field">
            <input
              onChange={e => {
                setPass(e.target.value);
              }}
              type="password"
              className="form__field"
              name="password"
              id="password"
              required
            />
            <label className="form__label">Password</label>
          </div>
          <div className="form__group">
            <input
              className="form__field__submit__file "
              type="file"
              id="profile_pic"
              name="profile_pic"
              accept=".jpg, .jpeg, .png"
              onChange={uploadPic}
              required
            />
            <label className="form__label__pic">Upload profile picture</label>
          </div>

          <div className="form__group field">
            <input
              type="submit"
              value="Register"
              className="form__field__submit"
              required
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
