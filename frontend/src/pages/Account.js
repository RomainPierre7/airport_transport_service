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
      <h1>{login}'s account</h1>
      <MyTripsData login={login} />
    </div>
  );
};

export default Account;
