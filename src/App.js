import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getUrlToken } from './Spotify';
import Player from './Components/Player';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getUrlToken();
    const _token = hash.access_token;
    window.location.hash = '';
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => console.log('user', user));
    }
    return () => {};
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
