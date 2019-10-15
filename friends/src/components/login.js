import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
          
        });
      };

    const login = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.history.push('/friends')
        })
        .catch(err => console.log(err.response))
    }

    return (
        <form className="login-form" onSubmit={login}>
            <label className='username'>
                Username:
                <input type='text' name='username' placeholder='Username' value={credentials.username} onChange={handleChange}/>
            </label>
            <label>
                Password:
                <input type='password' name='password' value={credentials.password} onChange={handleChange} />
            </label>
            <button className='submit'>Log in</button>


        </form>
    )
}

export default LoginForm