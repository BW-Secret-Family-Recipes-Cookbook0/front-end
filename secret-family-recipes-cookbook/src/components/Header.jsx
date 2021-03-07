import React from 'react'
import {Link } from "react-router-dom"
import './app.css'


const header = () => {
    const logout = () => {

    }
    return (
    <header>
        <div className='navigation'>
            <div className="logo">
                <img src="./logowhite.png"/>
            </div>
            
            <div className="nav">
                <ul>
                <li>
                  <Link to='/login'><p className="headerLink">LOGIN</p></Link>
                </li>
                <li>
                  <Link to='/register'><p className="headerLink">REGISTER</p></Link>
                </li>
                <li>
                  <Link to='/recipes'><p className="headerLink">RECIPES</p></Link>
                </li>
                <li>
                  <Link to='/' onClick={logout}><p className="headerLink">LOGOUT</p></Link>
                </li>
                </ul> 
            </div>
            
                
        </div>
    </header>
        
    )
}

export default header



