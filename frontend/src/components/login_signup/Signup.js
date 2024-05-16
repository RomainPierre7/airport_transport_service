import React, { useState } from 'react';

function Signup() {
  const [signupData, setSignupData] = useState({ login: '', name: '', surname: '', password: '', birthdate: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      login: signupData.login,
      name: signupData.name,
      surname: signupData.surname,
      password: signupData.password,
      birthdate: signupData.birthdate
    };

    fetch('api/customer/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Connection successful');
          window.location.href = '/signup_login?error=User successfully registered. You can now log in.';
        } else {
          console.error('Error during Signup');
          window.location.href = '/signup_login?error=This username is already taken. Please try another one.';
        }
      })
      .catch(error => {
        console.error('Error during Signup:', error);
        window.location.href = '/signup_login?error=Error during Signup. Please try again.';
      });
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className='signupusernamebox'>
          <h3>username</h3>
          <input type="text" id="login" name="login" placeholder="" value={signupData.login} onChange={handleInputChange} required />
        </div>
        <div className='signupnamebox'>
          <h3>name</h3>
          <input type="text" id="name" name="name" placeholder="" value={signupData.name} onChange={handleInputChange} required />
        </div>
        <div className='signupsurnamebox'>
          <h3>surname</h3>
          <input type="text" id="surname" name="surname" placeholder="" value={signupData.surname} onChange={handleInputChange} required />
        </div>
        <div className='signuppasswordbox'>
          <h3>password</h3>
          <input type="password" id="password" name="password" placeholder="" value={signupData.password} onChange={handleInputChange} required />
        </div>
        <div className='signupbirthdaybox'>
          <h3>birthdate</h3>
          <input type="date" id="birthdate" name="birthdate" value={signupData.birthdate} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">CONFIRM</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
