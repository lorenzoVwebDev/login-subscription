import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../services/token.js'

function Login({setToken}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.log(username)
  console.log(password)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = loginUser({
      username,
      password
    })
    setToken(token)
  }
  
  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func
}