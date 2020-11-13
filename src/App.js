import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import Spinner from "./Components/Spinner/index";
import { useDataLayerValue } from "./DataLayer";
import { getUrlToken } from "./Spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  const initialize = () => {
    const hash = getUrlToken();
    const _token = hash.access_token;
    window.location.hash = "";

    dispatch({
      spotify,
    });

    if (_token) {
      dispatch({
        token: _token,
      });

      spotify.setAccessToken(_token);

      dispatch({ loader: true });
      spotify.getMe().then((user) => {
        dispatch({ user });
        dispatch({ loader: false });
      });

      dispatch({ loader: true });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ playlists });
        dispatch({ loader: false });
      });

      dispatch({ loader: true });
      spotify.getMyRecentlyPlayedTracks().then((recentTracks) => {
        dispatch({ recentTracks });
        dispatch({ loader: false });
      });
    }
  };

  useEffect(initialize, []);

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
