import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      login: loginData.login,
      password: loginData.password
    };

    fetch('api/customer/login', {
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
          console.error('Error during login');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
      })
      .then(() => {
        window.location.href = '/account';
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="login" name="login" placeholder="Login" value={loginData.login} onChange={handleInputChange} required />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password" value={loginData.password} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
