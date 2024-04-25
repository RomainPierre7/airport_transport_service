import React from 'react';
import { Link } from 'react-router-dom';
import Partners from '../../assets/images/Partners.png';
import Home1 from '../../assets/images/Home1.jpg';
import ArrowReserve from '../../assets/images/ArrowReserve.png';

function HomeOne() {
  return (
    <div className='HomeOne'>
      <div className='OneLeft'>
        <h1>Effortless Airport Commute:</h1>
        <h2>Riga's Best</h2>
        <p>Our dedicated fleet ensures prompt pickups and drop-offs, making your journey hassle-free. Experience unparalleled comfort and reliability with our professional drivers and spacious vehicles.</p>
        <Link to="/">
          <button><img src={ArrowReserve} alt='Reserve'></img>Reserve Your Spot</button>
        </Link>
        <h5>Our Trusted Partners</h5>
        <img className='partnerImg' src={Partners} alt='Partners'></img>
      </div>
      <div className='OneRight'>
        <img src={Home1} alt='Home1.jpg'></img>
      </div>
    </div>
  );
}

export default HomeOne;