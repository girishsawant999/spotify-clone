import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import * as actions from './actionTypes';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import Spinner from './Components/Spinner/index';
import { useDataLayerValue } from './DataLayer';
import { getUrlToken } from './Spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getUrlToken();
    const _token = hash.access_token;
    window.location.hash = '';

    dispatch({
      type: actions.SET_SPOTIFY,
      payload: spotify,
    });

    if (_token) {
      dispatch({
        type: actions.SET_TOKEN,
        payload: _token,
      });

      spotify.setAccessToken(_token);

      dispatch({ type: actions.LOADER_TRUE });
      spotify.getMe().then((user) => {
        dispatch({ type: actions.SET_USER, payload: user });
        dispatch({ type: actions.LOADER_FALSE });
      });

      dispatch({ type: actions.LOADER_TRUE });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: actions.SET_PLAYLIST, payload: playlists });
        dispatch({ type: actions.LOADER_FALSE });
      });

      dispatch({ type: actions.LOADER_TRUE });
      spotify.getCategories({ country: 'IN' }).then((categories) => {
        dispatch({
          type: actions.SET_CATEGORIES,
          payload: categories.categories,
        });
        dispatch({ type: actions.LOADER_FALSE });
      });

      dispatch({ type: actions.LOADER_TRUE });
      spotify.getCategoryPlaylists('toplists').then((currentCategory) => {
        dispatch({
          type: actions.SET_CURRENT_CATEGORY,
          payload: currentCategory,
        });
        dispatch({ type: actions.LOADER_FALSE });
      });

      dispatch({ type: actions.LOADER_TRUE });
      spotify.getMyRecentlyPlayedTracks().then((recentTracks) => {
        dispatch({ type: actions.SET_RECENT_TRACKS, payload: recentTracks });
        dispatch({ type: actions.LOADER_FALSE });
      });
    }

    return () => {};
  }, []);

  return (
    <div className="app">
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
