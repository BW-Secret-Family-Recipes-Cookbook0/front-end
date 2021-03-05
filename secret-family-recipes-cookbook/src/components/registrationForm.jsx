import React, { useState, useEffect } from 'react';
import './app.css';
import axios from 'axios';

export default function Registration(){  
    const [values, setValues] = useState({
        username:"",
        email:"",
        name:"",
        password:"",
        confirmPassword:"",
    });    
    
    useEffect(()=>{
        axios.get('https://bw-secret-family-recipes0.herokuapp.com/api/recipes/recipelist')
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
            
        })
    },[])
    
    // I don't know how to make this part better, so I won't repeat the code. 
    const handleUsernameInputChange=(event)=>{
        setValues({...values, username: event.target.value})
    }
    
    const handleEmailInputChange=(event)=>{
        setValues({...values, email: event.target.value})
    }
    
    const handleNameInputChange=(event)=>{
        setValues({...values, name: event.target.value})
    }
    
    const handlePasswordInputChange=(event)=>{
        setValues({...values, password: event.target.value})
    }
    const handleConfirmPasswordInputChange=(event)=>{
        setValues({...values, confirmPassword: event.target.value})
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://bw-secret-family-recipes0.herokuapp.com/api/recipes/recipelis',values)
        .then((res)=>{  
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    
    return (
        //creating the form
        //the input fields work but I need to make the register button to work
        <div className='form-container'>
            <form className='registration-form'>
                <h2>CREATE AN ACCOUNT</h2>
                <label>
                    <p className="form">Username:</p>
                    <input
                    onChange={handleUsernameInputChange}
                    value={values.username}
                    className="input-field"
                    name="username" />
                </label>
                <label>
                <p className="form">Email:</p>
                <input
                onChange={handleEmailInputChange}
                value={values.email}
                className="input-field"
                name='email'/>
                </label>
                <label>
                    <p className="form">Name:</p>
                    <input
                    onChange={handleNameInputChange}
                    value={values.name}
                    className="input-field"
                    name="name"/>
                </label>
                <label>
                <p className="form">Password:</p>
                <input
                onChange={handlePasswordInputChange}
                value={values.password}
                className="input-field"
                name="password"/>
                </label>
                <label>
                    <p className="form">Confirm Password:</p>
                    <input 
                    onChange={handleConfirmPasswordInputChange}
                    value={values.confirmPassword}
                    className="input-field"
                    name="confirmPassword"/>
                </label>
                <button onSubmit={handleSubmit}>
                    REGISTER
                </button>
            </form>
            
        </div>
    )


}

