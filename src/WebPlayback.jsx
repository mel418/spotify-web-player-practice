import React, { useState, useEffect} from "react";

function WebPlayback(props) {

  const [player, setPlayer] = useState(undefined);
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOauthToken: cb => { cb(props.token); },
        volume: 0.5
      });

      setPlayer(player);
      
      // emitted when the SDK is connected and ready to stream content
      player.addListener('ready', ({device_id}) => {
        console.log('Ready with Device ID', device_id);
      });

      // in case the connection is broken
      player.addListener('not_ready', ({device_id}) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect(); //perform the connection of our new Spotify instance
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-wrapper">

        </div>
      </div>
    </>
  );
}

export default WebPlayback