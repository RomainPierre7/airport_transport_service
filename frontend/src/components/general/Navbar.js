import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SkyRideLogo.png';
import IsAuthenticated from '../../utils/IsAuthenticated';

function Navbar() {
  const isLoggedIn = IsAuthenticated();

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
          {!isLoggedIn && (
            <Link className="nav-link" to="signup_login">
              <button type="button" className="btn btn-light">Sign Up / Log in</button>
            </Link>)
          }
          {isLoggedIn && (
            <Link className="nav-link" to="account">
              <button type="button" className="btn btn-light">My account</button>
            </Link>)
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
