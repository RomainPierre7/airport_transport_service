import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  useEffect(() => {
    fetch("/busNetwork/stops/routes/1")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      login: loginData.login,
      password: loginData.password
    };
  
    fetch('/customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Connection successful');
        window.location.reload();
      } else {
        console.error('Error during login');
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
  }
  

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="login" name="login" placeholder="Login" value={loginData.login} onChange={handleInputChange} required />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password" value={loginData.password} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      {backendData && backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>All route 1 stops:</h1>
          <ul>
            {backendData && backendData.map((stop, i) => (
              <li key={i}>
                <p>ID: {stop.STOPID}</p>
                <p>Name: {stop.STOPNAME}</p>
                <p>Location: {stop.STOPLOCATION}</p>
                <p>Latitude: {stop.STOPLATITUDE}</p>
                <p>Longitude: {stop.STOPLONGITUDE}</p>
                <p>PRM access: {stop.PRMACCESS}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
