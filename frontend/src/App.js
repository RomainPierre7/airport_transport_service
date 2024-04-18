import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/App.css';
import IsAuthenticated from './utils/IsAuthenticated';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navabar.js';
import HomeOne from './components/HomeOne.js';
import HomeTwo from './components/HomeTwo.js';
import HomeThree from './components/HomeThree.js';
import HomeFour from './components/HomeFour.js';
import Reserve from './pages/Reserve';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Définissez vos routes ici */}
        <Route path="/reserve" element={<Reserve />} />
        {/* Autres */}
      </Routes>

      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
    </div>
  );
}

export default App;


