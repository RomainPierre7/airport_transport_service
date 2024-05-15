import React, { useState, useEffect } from 'react';
import Loading from '../assets/gif/loading.gif';

function Payment() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        window.location.href = '/account';
      }, 3000);
    }, 3000);
  }, []);

  return (
    <div className='payment'>
      {loading ? (
        <div>
          <h1>Ongoing Payment...</h1>
          <img src={Loading} alt="Loading..." />
        </div>
      ) : (
        <div className='accounterror1'>
          <h1>Payment Successful !</h1>
          <p> Thank you for using our services. </p>
          <p> Your payment has been successfully processed. </p>
          <p> You will be redirected to your account page shortly. </p>
          <br />
          <p> If you are not redirected automatically, click <a href="/account">here</a></p>
        </div>
      )}
    </div>
  );
}

export default Payment;
