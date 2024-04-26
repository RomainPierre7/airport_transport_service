import React from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
    let { TripID } = useParams();
    return (
        <div>
            <h2>Réservation ID: {TripID}</h2>
            {/* Autres détails de la réservation en fonction de TripID */}
        </div>
    );
};

export default TripDetails;
