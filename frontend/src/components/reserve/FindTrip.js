import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GetStops() {
    const [stopsData, setStopsData] = useState([]);

    useEffect(() => {
        fetch('api/busNetwork/stops')
            .then(response => response.json())
            .then(data => {
                setStopsData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return stopsData.filter(stop => stop.STOPID !== 1);
}

function FindTrip() {
    const stopsData = GetStops();
    const [FindTripData, setFindTripData] = useState({ direction: '1', from: '2', day: '', time: '' });
    const [tripData, setTripData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFindTripData({ ...FindTripData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            direction: FindTripData.direction,
            from: FindTripData.from,
            day: FindTripData.day,
            time: FindTripData.time,
        };

        if (formData.direction === '1') {
            fetch('api/busNetwork/schedules/direction/' + formData.direction + '/stops/' + formData.from + '/day/' + formData.day + '/time/' + formData.time + '/to')
                .then(response => response.json())
                .then(data => {
                    setTripData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {
            fetch('api/busNetwork/schedules/direction/' + formData.direction + '/stops/' + formData.from + '/day/' + formData.day + '/time/' + formData.time + '/from')
                .then(response => response.json())
                .then(data => {
                    setTripData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }

    let pickupStopTitle = FindTripData.direction === '1' ? 'Select your pickup stop' : 'Select your drop-off stop';

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Select your direction</h2>
                    <select id="direction" name="direction" value={FindTripData.direction} onChange={handleInputChange} required>
                        <option value="1">To the airport</option>
                        <option value="0">From the airport</option>
                    </select>
                    <h2>{pickupStopTitle}</h2>
                    <select id="from" name="from" value={FindTripData.from} onChange={handleInputChange} required>
                        {stopsData && stopsData.map((stop, i) => (
                            <option key={i} value={stop.STOPID}>{stop.STOPNAME}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <h2>Select the day</h2>
                    <input type="date" id="day" name="day" value={FindTripData.day} onChange={handleInputChange} required />
                </div>
                <div>
                    <h2>Select the time</h2>
                    <input type="time" id="time" name="time" value={FindTripData.time} onChange={handleInputChange} required />
                </div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>

            {tripData && tripData.length === 0 ? (
                <p>No trips found</p>
            ) : (
                <div>
                    <h1>Trips found:</h1>
                    <ul>
                        {tripData && tripData.map((trip, i) => (
                            <Link to={`/reserve/trip/${trip.TRIPID}`}>
                                <li key={i}>
                                    <p>Route: {trip.ROUTEID}</p>
                                    <p>Trip: {trip.TRIPID}</p>
                                    {trip.TRIPMAINDIRECTION === 1 ? (
                                        <>
                                            <p>Departure time: {new Date(trip.SCHEDULETIME).toLocaleString()}</p>
                                            <p>Arrival time: {new Date(trip.ARRIVALTIME).toLocaleString()}</p>
                                            <p>Duration: {Math.abs(new Date(trip.ARRIVALTIME) - new Date(trip.SCHEDULETIME)) / 60000} minutes</p>
                                        </>
                                    ) : (
                                        <>
                                            <p>Departure time: {new Date(trip.DEPARTURETIME).toLocaleString()}</p>
                                            <p>Arrival time: {new Date(trip.SCHEDULETIME).toLocaleString()}</p>
                                            <p>Duration: {Math.abs(new Date(trip.SCHEDULETIME) - new Date(trip.DEPARTURETIME)) / 60000} minutes</p>
                                        </>
                                    )}
                                    <p>Price: {trip.PRICE} €</p>
                                </li>

                            </Link>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
}

export default FindTrip;
