import React from 'react';
import express_shuttle from '../assets/images/express_shuttle.png';

function HomeTwo() {
  return (
    <div className='HomeTwo'>
        
        <div className='Block1'>
          <img src={express_shuttle}></img>
          <h2>Express Shuttle</h2>
          <p>"Direct Routes"</p>
          <p>"Efficient transfers with minimal stops for swift airport connections."</p>
        </div>
        <div className='Block2'>
        </div>
        <div className='Block1'>
        </div>
        <div className='Block2'>
          <img src={express_shuttle}></img>
        </div>
        <div className='Block1'>
        </div>
        <div className='Block2'>
        </div>
        
    </div>
  );
}

export default HomeTwo;