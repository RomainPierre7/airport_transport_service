import React, { useState, useEffect } from 'react';

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

    return stopsData;
}

function FindTrip() {
    const stopsData = GetStops();

    const [FindTripData, setFindTripData] = useState({ direction: '', from: '', day: '', time: '' });

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

        fetch('api/search', {
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
                    console.error('Error during FindTrip');
                }
            })
            .catch(error => {
                console.error('Error during FindTrip:', error);
            })
            .then(() => {
                window.location.href = '/account';
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Select your direction</h2>
                    <select id="direction" name="direction" value={FindTripData.direction} onChange={handleInputChange} required>
                        <option value="1">To the airport</option>
                        <option value="0">From the airport</option>
                    </select>
                    <h2>Select your pickup stop</h2>
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
        </div>
    );
}

export default FindTrip;
