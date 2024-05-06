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
    <div>
      {login === null ? (
        <div>
          <h1>Log in to view your account</h1>
          If you don't have an account, you can sign up <a href="/signup_login">here</a>.
          <br />
          If you have just tried to log in, please check your credentials and try again <a href="/signup_login">here</a>.
        </div>
      ) : (
        <div>
          <h1>{login}'s account</h1>
          <MyTripsData login={login} />
        </div>
      )}
    </div>
  );
};

export default Account;
