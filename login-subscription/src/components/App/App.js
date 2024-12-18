import React, { useState} from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard.js';
import Preferences from '../Preferences/Preferences.js';
import Login from '../Login/Login.js';
import { useToken } from '../services/token.js';

function App() {
  const { setToken, token } = useToken()
  if (!token) {
    return (
      <Login setToken={setToken}/>
    )
  }
  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Link to="dashboard"><li>Dashboard</li></Link>
        <Link to="preferences"><li>Preferences</li></Link>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
