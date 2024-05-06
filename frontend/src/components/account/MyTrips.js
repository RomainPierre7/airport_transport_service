import React, { useState, useEffect } from 'react';

function GetStops() {
    const [MyTripsData, setMyTripsData] = useState([]);

    useEffect(() => {
        fetch('api/reservation/customer')
            .then(response => response.json())
            .then(data => {
                setMyTripsData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return MyTripsData;
}

function MyTripsData() {
    const tripsData = GetStops();

    const handleButtonClick = (reservationId) => {
        fetch(`api/reservation/ticket/${reservationId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(ticketBlob => {
                const ticketURL = URL.createObjectURL(ticketBlob);
                window.open(ticketURL);
            })
            .catch(error => {
                console.error('Error fetching ticket details:', error);
            });
    };

    return (
        <div>
            <h1>My Trips</h1>
            <ul>
                {tripsData.map((trip) => (
                    <li key={trip.RESERVATIONID}>
                        {trip.TRIPID}
                        <button onClick={() => handleButtonClick(trip.RESERVATIONID)}>Get Ticket</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyTripsData;
