import React, { useState, useEffect } from 'react';
import TripDetails from '../components/reserve/TripDetails';

const SeeTrip = () => {

  return (
    <div className='seetrip'>
      <h1>TRIP INFO</h1>
      <TripDetails />
    </div>
  );
};

export default SeeTrip;
