import React from 'react'

const LoginForm = () => {

    return (
        <form className="login-form">
            <label className='username'>
                Username:
                <input type='text' name='username' placeholder='Username' />
            </label>
            <label>
                Password:
                <input type='password' name='password' />
            </label>


        </form>
    )
}

export default LoginForm