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
                        {trip.TRIPMAINDIRECTION === 1 ? (
                            <span>Direction: Airport</span>
                        ) : (
                            <span>Direction: City</span>
                        )}
                        <br />
                        {trip.TRIPMAINDIRECTION === 1 ? (
                            <div>
                                From: {trip.STOPNAME}
                                <br />
                                To: Airport
                                <br />
                                Time: {new Date(trip.SCHEDULETIME).toLocaleString()}
                            </div>
                        ) : (
                            <div>
                                From: Airport
                                <br />
                                To: {trip.STOPNAME}
                                <br />
                                Time: {new Date(trip.AIRPORTTIME).toLocaleString()}
                            </div>
                        )}
                        Price: {trip.RESERVATIONPRICE} €
                        <br />
                        <button onClick={() => handleButtonClick(trip.RESERVATIONID)}>Get Ticket</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default MyTripsData;
