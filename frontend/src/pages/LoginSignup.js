import React, { useEffect } from 'react';
import Login from '../components/login_signup/Login';
import Signup from '../components/login_signup/Signup';

function LoginPage() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    const errorElement = document.querySelector('.error');

    if (error && errorElement) {
      errorElement.style.display = 'block';
      errorElement.innerHTML = `<p>${error}</p>`;
    }
  }, []);

  return (
    <div className='loginsignupPage'>
      <div className='error'>
        <p></p>
      </div>
      <div className='loginsignup'>
        <div className='loginbox'>
          <h1>LOG IN</h1>
          <Login />
        </div>
        <div className='signupbox'>
          <h1>SIGN UP</h1>
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
