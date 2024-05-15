import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function createReservation(StopID, TripID) {
    fetch('/api/reservation/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            stopID: StopID,
            tripID: TripID,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function TripDetails() {
    const { tripId, stopId } = useParams();

    const [tripData, setTripData] = useState([]);
    const [stopData, setStopData] = useState([]);
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        if (tripId) {
            fetch('/api/busNetwork/trips/' + tripId)
                .then(response => response.json())
                .then(data => {
                    setTripData(data);
                    return fetch('/api/busNetwork/vehicles/' + data[0].VEHICLEID);
                })
                .then(response => response.json())
                .then(data => {
                    setVehicleData(data);
                })
                .catch(error => {
                    console.error('Error fetching trip data:', error);
                });
        }
    }, [tripId]);

    useEffect(() => {
        if (stopId) {
            fetch('/api/busNetwork/stops/' + stopId)
                .then(response => response.json())
                .then(data => {
                    setStopData(data);
                })
                .catch(error => {
                    console.error('Error fetching stop data:', error);
                });
        }
    }, [stopId]);

    return (
        <div className='tripdtls'>  
            {tripData.length > 0 && stopData.length > 0 && vehicleData.length > 0 && (
                <>
                <div className='tripdetails'>
                <div className='stopdetails'>
                    <h2>Trip Details</h2>
                    <p>Trip ID: {tripData[0].TRIPID}</p>
                    <p>Route: {tripData[0].ROUTEID}</p>
                    <p>Direction: {tripData[0].TRIPMAINDIRECTION}</p>
                    </div>
                    <div className='stopdetails'>
                    <h2>Stop Details</h2>
                    <p>Stop ID: {stopData[0].STOPID}</p>
                    <p>Stop Name: {stopData[0].STOPNAME}</p>
                    <p>Stop Location: {stopData[0].STOPLOCATION}</p>
                    <p>Stop Latitude: {stopData[0].STOPLATITUDE}</p>
                    <p>Stop Longitude: {stopData[0].STOPLONGITUDE}</p>
                    <p>PRM Access: {stopData[0].PRMACCESS}</p>
                    </div>
                    <div className='stopdetails'>
                    <h2>Vehicle Details</h2>
                    <p>Vehicle ID: {vehicleData[0].VEHICLEID}</p>
                    <p>Vehicle Model: {vehicleData[0].VEHICLEMODEL}</p>
                    <p>Vehicle Brand: {vehicleData[0].VEHICLEBRAND}</p>
                    <p>Vehicle Type: {vehicleData[0].VEHICLETYPE}</p>
                    <p>License Plate: {vehicleData[0].VEHICLELICENSE}</p>
                    <p>Vehicle Capacity: {vehicleData[0].VEHICLECAPACITY}</p>
                    </div>
                    </div>
                </>
            )}
            <Link to={`/reserve/trip/${tripId}/stop/${stopId}/payment`}>
                <button onClick={() => createReservation(stopData[0].STOPID, tripData[0].TRIPID)}>Proceed to payment</button>
            </Link>
        </div >
    );
}

export default TripDetails;
