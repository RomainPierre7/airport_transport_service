import React, { useEffect, useState } from 'react';
import './assets/App.css';
import IsAuthenticated from './utils/IsAuthenticated';
import LoginPage from './pages/LoginPage';
import RouteDetails from './components/RouteDetails';

function App() {
  const isLoggedIn = IsAuthenticated();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      fetch(`/customer/informations`)
        .then(response => response.json())
        .then(data => {
          setUserInfo(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [isLoggedIn]);

  return (
    <div>
      {!isLoggedIn && <LoginPage />}

      {isLoggedIn && userInfo && userInfo.length > 0 && (
        <div>
          <h1>Welcome {userInfo[0].CUSTOMERNAME} {userInfo[0].CUSTOMERSURNAME}</h1>
        </div>
      )}
      <RouteDetails id={1} />
      <RouteDetails id={2} />
      <RouteDetails id={3} />
    </div>
  );
}

export default App;
