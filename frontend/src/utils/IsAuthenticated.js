import { useState, useEffect } from "react";

function IsAuthenticated() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    fetch("/api/customer/isLoggedIn")
      .then(response => {
        if (response.status === 200) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      })
      .catch(error => {
        console.error("Error checking authentication:", error);
        setIsLogged(false);
      });
  }, []);

  return isLogged;
}

export default IsAuthenticated;
