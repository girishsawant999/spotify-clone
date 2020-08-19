import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../DataLayer';
import './playListView.css';

function PlayListView(props) {
  const {
    match: { params },
  } = props;
  let { playlist_id } = params;
  const [{ spotify }, dispatch] = useDataLayerValue();
  const [playlist, setplaylist] = useState(null);

  useEffect(() => {
    spotify.getPlaylist(playlist_id).then((response) => {
      setplaylist(response);
    });

    return () => {};
  }, []);

  return (
    <div className="playlist">
      {/* Play List cover and description */}
      {/* tracks */}
      {playlist_id}
    </div>
  );
}

export default PlayListView;
