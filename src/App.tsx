import React, {FC} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Views/Home/Home'
import Profile from './Views/Profile/Profile'

const App:FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
