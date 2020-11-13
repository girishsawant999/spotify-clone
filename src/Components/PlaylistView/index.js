import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../../DataLayer";
import BodyHeader from "../BodyHeader";
import PlaylistCover from "../PlaylistCover";
import TrackRow from "../TrackRow";
import "./playListView.css";

function PlayListView(props) {
  const {
    match: { params },
  } = props;
  let { playlist_id } = params;
  const [{ spotify }, dispatch] = useDataLayerValue();
  const [playlist, setplaylist] = useState(null);
  const [tracks, settracks] = useState([]);

  const initialize = () => {
    dispatch({ loader: true });
    spotify.getPlaylist(playlist_id).then((response) => {
      setplaylist(response);
      dispatch({ loader: false });
    });
    spotify.getPlaylistTracks(playlist_id).then((response) => {
      settracks(response.items);
      dispatch({ loader: false });
    });
  };

  useEffect(initialize, []);

  return (
    <div
      className="playlist"
      style={
        playlist?.primary_color
          ? {
              background: `#121212 linear-gradient(${playlist.primary_color}, #121212, #000)`,
            }
          : {}
      }
    >
      <BodyHeader />
      <PlaylistCover playlist={playlist} />
      <div className="playlist__trackscontainer">
        {tracks.map((track) => (
          <TrackRow track={track} />
        ))}
      </div>
    </div>
  );
}

export default PlayListView;
