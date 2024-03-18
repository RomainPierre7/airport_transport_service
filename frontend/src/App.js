import React, { useEffect, useState } from 'react';
import './assets/App.css';
import IsAuthenticated from './utils/IsAuthenticated';
import LoginPage from './pages/LoginPage';
import RouteDetails from './components/RouteDetails';
import AirportNavbar from './components/AirportNavabar.js';
import HomeOne from './components/HomeOne.js';
import HomeTwo from './components/HomeTwo.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AirportNavbar />
      <HomeOne />
      <HomeTwo />
      <LoginPage />

    </div>
  );
}

export default App;


