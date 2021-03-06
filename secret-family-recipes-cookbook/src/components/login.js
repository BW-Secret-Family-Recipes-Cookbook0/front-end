import React from 'react';
import axios from 'axios'
import './app.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('https://bw-secret-family-recipes0.herokuapp.com/api/recipes/recipelist',this.state.credentials)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err)
    })
  };
  
 

  render() {
    return (
      <div className='form-container'>
        <form className='registration-form' onSubmit={this.login}>
        <h2>LOGIN</h2>
        <label>
          <p className="form">Username:</p>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            className="input-field"
            onChange={this.handleChange}/>
          </label>
          <label>
          <p className="form">Password:</p>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            className="input-field"
            onChange={this.handleChange}/>
          </label>
          <button onSubmit={this.login}>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Login;