import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../services/loginUser.js'

function Login({ setToken, setAuthok, authok }) {
  const [ username, setUsername ] = useState()
  const [ pwr, setPassword ] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      username,
      pwr
    })

    if (!response?.token) {
      setAuthok(false)
    } else {
      setAuthok(true)
      setToken(response.token)
    }
  }
  if (authok) {
    return (
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <div>
          <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="wrapper">
        <h1>Username or password are wrong!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <div>
          <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}