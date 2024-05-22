import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SkyRideLogo.png';
import IsAuthenticated from '../../utils/IsAuthenticated';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const handleLogout = () => {
  fetch(`api/customer/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error while logout:', error);
    });
  window.location.href = "/";
};

function Navbar() {
  const isLoggedIn = IsAuthenticated();

  return (
    <div className='Anav'>
      <nav className="navbar navbar-expand-lg" style={{ margin: 'auto' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" />SkyRide</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{ textAlign: 'center' }}>
            <ul className="navbar-nav mb-5 mb-lg-0 m-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reserve">Reserve</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex" id="navbarNav" style={{ textAlign: 'center' }}>
            {!isLoggedIn && (
              <Link className="nav-link" to="signup_login">
                <button type="button" className="btn btn-light">Sign Up / Log in</button>
              </Link>)
            }
            {isLoggedIn && (
              <Link className="nav-link" to="account">
                <button type="button" className="btn btn-light" style={{ textAlign: 'center', margin: '0 20px' }}>My account</button>
              </Link>)
            }
            {isLoggedIn && (
              <button type="button" className="btn btn-light" onClick={handleLogout}>Log out</button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;