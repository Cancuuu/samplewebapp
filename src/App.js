import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import RegisterPage from './components/RegisterPage/RegisterPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/login" >
            <LoginPage />
          </Route>
          <Route path="/register" >
            <RegisterPage />
          </Route>
          <Route path="/dashboard" >
            <Dashboard />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
