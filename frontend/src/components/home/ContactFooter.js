import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SkyRideLogo.png';
import insta from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';

function Contact() {
  return (
    <div className='Contact'>
    <div className='ContactOne'>
        <div className='Contact1'>
        <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" />SkyRide</Link>
        <p>Our dedicated fleet ensures prompt pickups and drop-offs, making your journey hassle-free. Experience unparalleled comfort and reliability with our professional drivers and spacious vehicles.</p>
        </div>
        <div className='Contact2'>
        <h4>Pages</h4>
        <a href='Home.js'>Home</a>
        <a href='Home.js'>About</a>
        <a href='Home.js'>Reserve</a>
        <a href='Home.js'>Sign Up</a>
        <a href='Home.js'>Profile</a>
        </div>
        <div className='Contact3'>
        <h4>Contact Us</h4>
        </div>
    </div>
    <hr></hr>
    <div className='ContactTwo'>
        <div className='footerone'>
        <h4>Email</h4>
        <a>skyrdie@se.rtu.sample</a>
        </div>
        <div className='footertwo'>
        <h4>Phone</h4>
        <h4>+371 29 12 34 56</h4>
        </div>
        <div className='footerthree'>
        <h4>Adress</h4>
        <h4>Zunda krastmala 10, Rīga, LV-1048</h4>
        </div>
        <div className='footerfour'>
        <img src={insta}></img>
        <img src={facebook}></img>
        <img src={linkedin}></img>
        </div>
    </div>
    </div>
  );
}

export default Contact;