import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getToken } from '../services/token';

function Login({ setToken }) {
  const [ username, setUsername ] = useState()
  const [ password, setPassword ] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();

    const token = getToken({
      username,
      password
    })

    setToken(token)
  }
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
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}