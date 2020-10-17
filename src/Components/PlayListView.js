import React, { useEffect, useState } from 'react';
import * as actions from '../actionTypes';
import { useDataLayerValue } from '../DataLayer';
import BodyHeader from './BodyHeader';
import PlaylistCover from './PlaylistCover';
import './playListView.css';
import TrackRow from './TrackRow';

function PlayListView(props) {
  const {
    match: { params },
  } = props;
  let { playlist_id } = params;
  const [{ spotify }, dispatch] = useDataLayerValue();
  const [playlist, setplaylist] = useState(null);
  const [tracks, settracks] = useState([]);

  useEffect(() => {
    dispatch({ type: actions.LOADER_TRUE });
    spotify.getPlaylist(playlist_id).then((response) => {
      setplaylist(response);
      dispatch({ type: actions.LOADER_FALSE });
    });
    spotify.getPlaylistTracks(playlist_id).then((response) => {
      settracks(response.items);
      dispatch({ type: actions.LOADER_FALSE });
    });
    return () => {};
  }, []);

  return (
    <div
      className="playlist"
      style={
        playlist?.primary_color
          ? {
              background: `#121212 linear-gradient(${playlist.primary_color}, #121212, #000)`,
            }
          : {}
      }>
      {console.log('playlist :>> ', playlist)} <BodyHeader />
      <PlaylistCover playlist={playlist} />
      <hr />
      <div className="playlist__trackscontainer">
        {tracks.map((track) => (
          <TrackRow track={track} />
        ))}
      </div>
      {/* tracks */}
    </div>
  );
}

export default PlayListView;
