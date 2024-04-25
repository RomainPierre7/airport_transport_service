import React from 'react';

const Account = () => {

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

  return (
    <div>
      <h1>Account</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Account;
