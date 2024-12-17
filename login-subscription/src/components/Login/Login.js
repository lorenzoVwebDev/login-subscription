import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ setToken}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState()
  return (
    <div className="login-wrapper">
      <form action="">
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e)}/>
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
  setToken: PropTypes.func.isRequired
}