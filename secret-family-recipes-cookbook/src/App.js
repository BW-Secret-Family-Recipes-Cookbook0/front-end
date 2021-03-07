import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from "react-router-dom" 
import Login from './components/login'
import axios from 'axios'
import registrationForm from './components/registrationForm'
import { axiosWithAuth } from './utils/axiosWithAuth'
import PrivateRoute from './components/PrivateRoute'
import React, { useState, useEffect } from "react";
import Recipe from './components/Recipe'
import RecipeForm from './components/RecipeForm'
import UpdateForm from './components/UpdateForm'
import RecipeList from './components/RecipeList'
import Home from './components/Home'

function App() {
    const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = () => {
      axios
        .get("http://localhost:3333/")
        .then(res => {
          setItems(res.data);
        })
        .catch(error => console.log(error));
    };

    getItems();
  }, []);


   const logout = () => {
    axiosWithAuth().post('/logout')
      .catch(err => console.error("unable to logout"));
    localStorage.removeItem('token');
  };

    return (
    <Router>
       <nav>
        <h1 className="">Secret Family Recipes</h1>
        <div className="nav-links">
          <NavLink exact to="/recipe-form">
            Add Recipe
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/recipe-list">Recipe List</NavLink>
        </div>
      </nav>
      <div className="">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {localStorage.getItem('token') &&
            <>
              <li>
                <Link to="/login" onClick={logout}>Logout</Link>
              </li>
            </>
          }
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>

      { <Route exact path="/" component={Home} /> }
      <Route
        exact
        path="/recipe-list"
        render={props => <RecipeList {...props} items={items} />}
      />
      <Route
        path="/recipe-list/:id"
        render={props => <Recipe {...props} items={items} setItems={setItems} />}
      />
      <Route path="/recipe-form" component={RecipeForm} />
      <Route
        path="/update-item/:id"
        render={() => <UpdateForm items={items} setItems={setItems} />}
      />
    </Router>
  );
}

export default App;