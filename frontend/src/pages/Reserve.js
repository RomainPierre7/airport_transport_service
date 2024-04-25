import React, { useState, useEffect } from 'react';

const Reserve = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`api/busNetwork/routes/1`)
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
      })
      .catch(error => {
        console.error('Error while fetching data:', error);
      });
  }
    , []);

  return (
    <div>
      <h1>Blank Reserve page</h1>
      {userInfo.length > 0 && (
        <div>
          <h1>
            Welcome {userInfo[0].ROUTECOLOR}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Reserve;
