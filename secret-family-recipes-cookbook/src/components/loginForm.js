import React from 'react'

const loginForm = () => {
    return (
        <div className='loginForm'>
            <form>
               <label>
               Username:
                   <input
                    type='text'
                    name='username'
                   />
               </label>
               <br/>
               <label>
                   Password:
                   <input
                    type='text'
                    name='password'
                   />
               </label>
               <button>Login</button>
            </form>
        </div>
    )
}

export default loginForm
