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
          window.location.reload();
        } else {
          console.error('Error during Signup');
        }
      })
      .catch(error => {
        console.error('Error during Signup:', error);
      })
      .then(() => {
        window.location.href = '/account';
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="login" name="login" placeholder="Login" value={signupData.login} onChange={handleInputChange} required />
        </div>
        <div>
          <input type="text" id="name" name="name" placeholder="Name" value={signupData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <input type="text" id="surname" name="surname" placeholder="Surname" value={signupData.surname} onChange={handleInputChange} required />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password" value={signupData.password} onChange={handleInputChange} required />
        </div>
        <div>
          <input type="date" id="birthdate" name="birthdate" value={signupData.birthdate} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
