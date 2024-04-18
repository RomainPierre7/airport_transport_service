import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About.js';
import Reserve from './pages/Reserve';
import Contact from './pages/Contact.js';
import Profile from './pages/Profile.js';
import './assets/App.css';
import IsAuthenticated from './utils/IsAuthenticated';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navabar.js';
import HomeOne from './components/HomeOne.js';
import HomeTwo from './components/HomeTwo.js';
import HomeThree from './components/HomeThree.js';
import HomeFour from './components/HomeFour.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<HomeOne />} />
        <Route path="/" element={<HomeTwo />} />
        <Route path="/" element={<HomeThree />} />
        <Route path="/" element={<HomeFour />} />
      </Routes>
    </div>
  );
}

export default App;


