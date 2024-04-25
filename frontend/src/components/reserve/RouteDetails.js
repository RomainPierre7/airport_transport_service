import React, { useState, useEffect } from 'react';

function RouteDetails(props) {
  const [routeData, setRouteData] = useState([]);
  const [stopsData, setStopsData] = useState([]);

  useEffect(() => {
    fetch(`/api/busNetwork/routes/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setRouteData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    fetch(`api//busNetwork/stops/routes/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setStopsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  return (
    <div>
      {routeData && routeData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{routeData[0].ROUTECOLOR} Route ({props.id}):</h1>
        </div>
      )}
      {stopsData && stopsData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {stopsData && stopsData.map((stop, i) => (
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

export default RouteDetails;