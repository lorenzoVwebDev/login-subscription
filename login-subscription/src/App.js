import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'
import Preferences from './components/Preferences/Preferences.js'
import Login from './components/Login/Login.js'

function App() {
  const [token, setToken] = useState();
   
  if (!token) {
    return <Login setToken={setToken}/>;
  }

  return (
    <div>
      <h1>Application</h1>
    <BrowserRouter>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/preferences">preferences</Link></li>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/preferences" element={<Preferences/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
