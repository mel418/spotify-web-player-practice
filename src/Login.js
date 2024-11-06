import React from "react";

// The login screen consists of one single button inviting users to log in.
// Once the user clicks on Login with Spotify, the component will perform a GET operation to /auth/login to start the authentication flow

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="btn-spotify" href="/auth/login">
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default Login;