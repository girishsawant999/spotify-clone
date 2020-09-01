import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../DataLayer';
import './playListView.css';
import BodyHeader from './BodyHeader';
import PlaylistCover from './PlaylistCover';
import TrackRow from './TrackRow';

function PlayListView(props) {
  const {
    match: { params },
  } = props;
  let { playlist_id } = params;
  const [{ spotify }, dispatch] = useDataLayerValue();
  const [playlist, setplaylist] = useState(null);
  const [tracks, settracks] = useState([])

  useEffect(() => {
    spotify.getPlaylist(playlist_id).then((response) => {
      setplaylist(response);
    });
    spotify.getPlaylistTracks(playlist_id).then((response) => {
      settracks(response.items);
    });
    return () => {};
  }, []);

  return (
    <div className="playlist">
      <BodyHeader />
      <PlaylistCover playlist={playlist}/>
      <hr/>
      <TrackRow/>
      <TrackRow/>
      <TrackRow/>
      <TrackRow/>
      <TrackRow/>

      {/* tracks */}

    </div>
  );
}

export default PlayListView;
