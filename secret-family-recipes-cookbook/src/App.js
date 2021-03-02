import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom" 
import Registration from './components/registrationForm'
import login from './components/login'
import React, {useState} from 'react'
function App() {

  const logout = () => {

  }

  return (
  <Router>
    <div className="App">
    <Registration/> /*I am not sure where to put the router, switch, route */
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={login} />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
