import React from 'react';
import Logo from '../assets/images/SkyRideLogo.png';

function AirportNavbar() {
  return (
    <div className='Anav'>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/App.js"><img src={Logo} alt="Logo" />SkyRide</a>
      <ul class="navbar-nav mb-5 mb-lg-0 m-flex">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reserve</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <button type="button" class="btn btn-light">Sign Up</button>
      
    </div>
    </nav>
  </div>
  );
}

export default AirportNavbar;
