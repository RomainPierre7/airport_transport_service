import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/SkyRideLogo.png';

function Navbar() {
  return (
    <div className='Anav'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" />SkyRide</Link>
          <ul className="navbar-nav mb-5 mb-lg-0 m-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reserve">Reserve</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact</Link>
            </li>
          </ul>
          <button type="button" className="btn btn-light">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
