import React, { Fragment, useState } from "react";
import "./Login.css";
import { auth } from "/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/firebase.js";
import DashboardPage from '/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/components/DashboardPage/DashboardPage.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Error from '/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/components/Error/Error.jsx'



const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);



  const logInUser = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => { return setLoggedIn(true) })
      .catch(() => { setError(true) });

  };




  return (
    <Fragment>

      {loggedIn

        ?
        <DashboardPage />

        :


        (


          <div className="form_div">
            {error ? <Error mensaje="Enter your password or email correctly" /> : null}
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
            <p className="p_dhac">Dont have an account?   <Link to="/register">   Sing up</Link></p>
        </div>)





      }  
    </Fragment>
  );
};

export default Login;
