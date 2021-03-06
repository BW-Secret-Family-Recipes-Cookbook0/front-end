
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom" 
import Login from './components/login'
import RegistrationForm from './components/registrationForm'
import RecipeList from './components/RecipeList'
import Header from './components/Header'

function App() {

  

  return (
  <Router>
    <div className="App">
    <Header/>
     
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/recipes" component={RecipeList} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
