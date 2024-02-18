import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/user/all")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
<div>
  {backendData && backendData.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>All user details:</h1>
      <ul>
        {backendData && backendData.map((user, i) => (
          <li key={i}>
            <p>ID: {user.CUSTOMERID}</p>
            <p>Name: {user.CUSTOMERNAME} {user.CUSTOMERSURNAME}</p>
            <p>Login: {user.CUSTOMERLOGIN}</p>
            <p>Password: {user.CUSTOMERPASSWORD}</p>
            <p>Birthdate: {user.CUSTOMERBIRTHDATE}</p>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


  );
}

export default App;
