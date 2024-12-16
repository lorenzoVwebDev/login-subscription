import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'
import Preferences from './components/Preferences/Preferences.js'

function App() {
  return (
    <div>
      <h1>Login</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/preferences' element={<Preferences/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
