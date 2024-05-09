import React from 'react';
import Login from '../components/login_signup/Login';
import Signup from '../components/login_signup/Signup';

function LoginPage() {
  return (
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
  );
}

export default LoginPage;
