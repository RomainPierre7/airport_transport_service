import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Reserve from './pages/Reserve';
import Contact from './pages/Contact.js';
import Profile from './pages/Profile.js';
import IsAuthenticated from './utils/IsAuthenticated';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navabar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;


