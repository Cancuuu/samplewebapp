import React, { Fragment, useState } from "react";
import "./Login.css";
import { auth } from "/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/firebase.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const logInUser = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, pass)
      .then(res => alert("user login"))
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
          <div className="form__group field">
            <input
              type="submit"
              value="Login"
              className="form__field__submit"
              required
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
