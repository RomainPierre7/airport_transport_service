import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);

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

  return (
<div>
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
