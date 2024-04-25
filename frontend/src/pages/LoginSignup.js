import React from 'react';
import Login from '../components/login_signup/Login';
import Signup from '../components/login_signup/Signup';

function LoginPage() {
  return (
    <div>
      <h1>Log in</h1>
      <Login />

      <h1>Sign up</h1>
      <Signup />
    </div>
  );
}

export default LoginPage;
