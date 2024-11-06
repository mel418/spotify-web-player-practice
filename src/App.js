import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // useEffect hook to send a GET request to the /auth/token endpoint to check if we have a valid access_token already requested
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return (
    <>
      { (token === '') ? <Login /> : <WebPlayback token = {token} />}
      {/* 
      - The Login component will be loaded in case the access_token is still empty
      
      - If the access_token has been requested already (there is an active session ongoing), the WebPlaback component will load instead, receiving the access_token we have just requested. */}
    </>
  );
}

export default App;