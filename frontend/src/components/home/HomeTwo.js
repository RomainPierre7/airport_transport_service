import React from 'react';
import express_shuttle from '../../assets/images/startup.png';
import city_airport from '../../assets/images/cityscape.png';
import exclusive from '../../assets/images/exclusive.png';
import tfhours from '../../assets/images/tfhours.png';
import groupic from '../../assets/images/teamwork.png';
import private_hire from '../../assets/images/headhunting.png';

function HomeTwo() {
  return (
    <div className='HomeTwo'>
      <div className='OurServices'>
        <h3>Our Services</h3>
        <h1>Discover Our Comprehensive Range of Riga Airport Transport Services</h1>
      </div>
      <div className='Blocks'>
        <div className='Block1'>
          <img src={express_shuttle}></img>
          <h2>Express Shuttle</h2>
          <p>"Direct Routes" <br></br>"Efficient transfers with minimal stops for swift airport connections."</p>
        </div>
        <div className='Block2'>
          <img src={city_airport}></img>
          <h2>City to Airport</h2>
          <p>"Convenient Connections" <br></br>"Effortlessly travel from the heart of Riga to the airport, stress-free and on time"</p>
        </div>
        <div className='Block1'>
          <img src={exclusive}></img>
          <h2>VIP Van Service</h2>
          <p>"Luxury Transport" <br></br>"Indulge in exclusive comfort with our premium van service."</p>
        </div>
        <div className='Block2'>
          <img src={tfhours}></img>
          <h2>24/7 Availability</h2>
          <p>"Round-the-Clock" <br></br>"Reliable transportation services available anytime, ensuring you never miss a flight."</p>
        </div>
        <div className='Block1'>
          <img src={groupic}></img>
          <h2>Group Transfers</h2>
          <p>"Large Parties" <br></br>"Seamless transportation solutions for groups."</p>
        </div>
        <div className='Block2'>
          <img src={private_hire}></img>
          <h2>Private Hire</h2>
          <p>"Personalized Rides" <br></br>"Enjoy privacy and flexibility with our dedicated private hire service."</p>
        </div>

      </div>
    </div>
  );
}

export default HomeTwo;