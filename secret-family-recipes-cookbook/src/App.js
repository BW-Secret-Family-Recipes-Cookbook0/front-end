import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom" 
import Login from './components/login'

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
      </Switch>
    </div>
  </Router>
  );
}

export default App;
