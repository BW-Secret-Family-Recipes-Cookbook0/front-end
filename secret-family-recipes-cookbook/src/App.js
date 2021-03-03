import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom" 
import Login from './components/login'
import axios from 'axios'

function App() {

  const logout = () => {

  }

  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
