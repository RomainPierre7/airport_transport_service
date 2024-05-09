import React, { useEffect, useState } from 'react';
import MyTripsData from '../components/account/MyTrips';
import Cookies from 'js-cookie';
const { jwtDecode } = require("jwt-decode");

const Account = () => {
  const cookie = Cookies.get('token');
  let login = null;
  if (cookie) {
    login = jwtDecode(cookie)['login'];
  }

  return (
    <div className='accountgeneral'>
      {login === null ? (
        <div className='accounterror'>
          <h1>LOG IN TO VIEW YOUR ACCOUNT</h1>
          <h2>If you don't have an account, you can sign up.</h2> 
          <a href="/signup_login">SIGNUP</a>
          <br />
          <h2>If you have just tried to log in, please check your credentials and try again.</h2> 
          <a href="/signup_login">LOGIN</a>
        </div>
      ) : (
        <div className='accountsuccess'>
          <h1>{login}'s account</h1>
          <MyTripsData login={login} />
        </div>
      )}
    </div>
  );
};

export default Account;
