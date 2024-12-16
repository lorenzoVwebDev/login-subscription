import React, { useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import Preferences from './components/Preferences/Preferences.js';
import Login from './components/Login/Login.js';

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return (
      <Login token={setToken}/>
    )
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
