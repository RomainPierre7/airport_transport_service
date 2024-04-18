import React from 'react';
import homefour1 from '../assets/images/homefour1.jpg';

function HomeFour() {
  return (
    <div className='HomeFour'>
    <div className='TitleFour'>
      <h1>Start Your New Adventure</h1>
    </div>
    <div className='PhotosFour'>
      <div className='PhotosFourLeft'>
      <img src={homefour1}></img>
      <img src={homefour1}></img>
      </div>
      <div className='PhotosFourRight'>
      <img src={homefour1}></img>
      <img src={homefour1}></img>
      </div>
    </div>
    </div>
  );
}

export default HomeFour;