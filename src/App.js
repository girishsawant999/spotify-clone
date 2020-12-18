import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import Spinner from './Components/Spinner';
import { useDataLayerValue } from './DataLayer';
import { getUrlToken } from './Spotify';
import { checkLocalStorageCompatibility } from './Utils';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  const initialize = () => {
    const hash = getUrlToken();
    const _token = checkLocalStorageCompatibility()
      ? localStorage.getItem('_token')
        ? localStorage.getItem('_token')
        : hash.access_token
      : hash.access_token;
    window.location.hash = '';

    dispatch({
      spotify,
    });

    if (_token) {
      dispatch({
        token: _token,
      });

      if (checkLocalStorageCompatibility())
        localStorage.setItem('_token', _token);

      spotify.setAccessToken(_token);

      dispatch({ loader: true });
      spotify
        .getMe()
        .then((user) => {
          dispatch({ user });
          spotify.getUserPlaylists().then((playlists) => {
            dispatch({ playlists });
            dispatch({ loader: false });
          });

          dispatch({ loader: true });
          spotify.getMyRecentlyPlayedTracks().then((recentTracks) => {
            dispatch({ recentTracks });
            dispatch({ loader: false });
          });

          spotify.getCategories({ country: 'IN' }).then((categories) => {
            dispatch({
              categories: categories.categories,
            });
          });
        })
        .catch((res) => {
          if (res.status === 401) {
            dispatch({
              token: null,
            });
            localStorage.removeItem('_token');
          }
        });
    }
  };

  useEffect(initialize, []);

  return (
    <div className='app'>
      {token ? (
        <>
          <Spinner />
          <Player spotify={spotify} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
