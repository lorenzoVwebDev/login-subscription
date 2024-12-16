import logo from './logo.svg';
import './App.css';
import { Browser, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'
import Preferences from './components/Preferences/Preferences.js'

function App() {
  return (
    <Dashboard/>
  );
}

export default App;
