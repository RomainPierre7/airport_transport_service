import React from 'react';
import homefour1 from '../../assets/images/homefour1.jpg';
import homefour2 from '../../assets/images/homefour2.jpg';
import homefour3 from '../../assets/images/homefour3.jpg';
import homefour4 from '../../assets/images/homefour4.jpg';

function HomeFour() {
  return (
    <div className='HomeFour'>
    <div className='TitleFour'>
      <h1>Start Your New Adventure</h1>
    </div>
    <div className='PhotosFour'>
      <div className='PhotosFourLeft'>
        <div className='homefour1'>
      <img src={homefour1}></img>
      <h2>Embark on a stress-free journey</h2>
      </div>
      <div className='homefour1'>
      <img src={homefour2}></img>
      <h2>Arrive in style and comfort</h2>
      </div>
      </div>
      <div className='PhotosFourRight'>
      <div className='homefour1'>
      <img src={homefour3}></img>
      <h2>Sit back, relax, and enjoy</h2>
      </div>
      <div className='homefour1'>
      <img src={homefour4}></img>
      <h2>Say goodbye to travel worries</h2>
      </div>
    </div>
    </div>
    </div>
  );
}

export default HomeFour;