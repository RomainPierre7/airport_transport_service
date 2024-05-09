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
        <Link className="navbar-brand" to="/" ><img src={Logo} alt="Logo" />SkyRide</Link>
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
        <h4>Pages</h4>
        <a href='Home.js'>Home</a>
        <a href='Home.js'>About</a>
        <a href='Home.js'>Reserve</a>
        <a href='Home.js'>Sign Up</a>
        <a href='Home.js'>Profile</a>
        </div>
        <div className='Contact4'>
        <h4>Contact Us</h4>
        </div>
    </div>
    <br></br>
    <hr></hr>
    <div className='ContactTwo'>
        <div className='footerone'>
        <h5>Email</h5>
        <a>skyrdie@se.rtu.sample</a>
        </div>
        <div className='footertwo'>
        <h5>Phone</h5>
        <a>+371 29 12 34 56</a>
        </div>
        <div className='footerthree'>
        <h5>Address</h5>
        <a>Zunda krastmala 10, Rīga, LV-1048</a>
        </div>
        <div className='footerfour'>
        <a><img src={insta}></img></a>
        <a><img src={facebook}></img></a>
        <a><img src={linkedin}></img></a>
        </div>
    </div>
    </div>
  );
}

export default Contact;