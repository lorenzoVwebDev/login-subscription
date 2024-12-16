import React from 'react';

function Login() {
  return (
    <div className="wrapper">
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password"/>
        </label>
        <div>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;