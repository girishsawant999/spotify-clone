import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../DataLayer';
import './playListView.css';
import BodyHeader from './BodyHeader';

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
      <BodyHeader />
      {/* Play List cover and description */}
      <div class="playlist__cover">
        <div class="playlist__image">
          <img src={playlist?.images[0]?.url} alt="" />
        </div>
        <div class="playlist_details">
          <h2 class="playlist__title">{playlist?.name}</h2>
          <p class="playlist__description">{playlist?.description} </p>
        </div>
      </div>
      {/* tracks */}
    </div>
  );
}

export default PlayListView;
