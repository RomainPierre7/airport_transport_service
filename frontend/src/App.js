import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [backendData2, setBackendData2] = useState([]);

  useEffect(() => {
    fetch("/test")
      .then(response => response.text())
      .then(data => {
        setBackendData2(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  return (
    <div>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Users with Bus Numbers (Test backend Json)</h1>
          <ul>
            {backendData.map((user, i) => (
              <li key={i}>
                <p>Name: {user.name}</p>
                <p>Bus Number: {user.bus_number}</p>
                <p>Date: {user.date}</p>
                <p>Time: {user.time}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <h1>Backend response (Test backend text)</h1>
      <p>{backendData2}</p>
    </div>
  );
}

export default App;
