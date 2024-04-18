import React from 'react';
import Home2 from '../assets/images/Home2.jpg';
import ArrowReserve from '../assets/images/ArrowReserve.png';

function HomeThree() {
  return (
    <div className='HomeThree'>
      <div className='ThreeLeft'>
        <img src={Home2} alt='Home2'></img>
      </div>
      <div className='ThreeRight'>
        <h3>About Us</h3>
        <h1>The core mission behind all our work</h1>
        <p>At Riga Airport Transport, our mission is simple yet profound: to ensure seamless, reliable, and comfortable transportation for every traveler journeying between Riga city and the airport. With a commitment to efficiency, safety, and customer satisfaction, we strive to exceed expectations with every ride.</p>
        <div className='ThreeStatistics'>
          <div className='journeys'>
            <h2>1000+</h2>
            <p>Completed Trips</p>
          </div>
          <div className='percent'>
            <h2>98%</h2>
            <p>Happy Customers</p>
          </div>
        </div>
        <button><img src={ArrowReserve} alt='Reserve'></img>Reserve Your Spot</button>
      </div>


    </div>
  );
}

export default HomeThree;