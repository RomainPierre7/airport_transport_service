import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Reserve from './pages/Reserve';
import Contact from './pages/Contact.js';
import Account from './pages/Account.js';
import LoginSignup from './pages/LoginSignup.js';
import Navbar from './components/general/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import SeeTrip from './pages/SeeTrip.js';
import Payment from './pages/Payment.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reserve/trip/:tripId/stop/:stopId" element={<SeeTrip />} />
        <Route path="/reserve/trip/:tripId/stop/:stopId/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup_login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;


