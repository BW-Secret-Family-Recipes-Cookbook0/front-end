import React from 'react';
import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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
    axiosWithAuth()
    .post('https://bw-secret-family-recipes0.herokuapp.com/api/auth/LOGIN', this.state.credentials)
      .then(res => {
        console.log("login response", res)
        
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.error("cannot login to server: ", err.message));
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
            onChange={this.handleChange}/>
          </label>
          <label>
          <p className="form">Password:</p>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}/>
          </label>
          
          
          <button>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Login;