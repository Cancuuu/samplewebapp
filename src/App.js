import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Dashboardage from './components/DashboardPage/DashboardPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route> 
          <Route exact path="/register" >
            <RegisterPage />
          </Route>
          <Route exact path="/DashboardPage" >
            <Dashboardage />
          </Route>
        </Switch>   
    </div>
    </Router>
  );
}

export default App;
