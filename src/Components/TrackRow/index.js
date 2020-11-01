import React from 'react';
import './trackRow.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function TrackRow({ track }) {
  return (
    <div class="TrackRow">
      <div className="TrackRow__img">
        <img src={track?.track?.album?.images[2]?.url} alt="" />
      </div>
      <div className="TrackRow__details">
        <p className="TrackRow__title">{track?.track?.name}</p>
        <p className="TrackRow__desc">
          {track?.track?.artists.map((artist) => artist.name).join(', ')}
        </p>
      </div>
      <div className="TrackRow__playButton">
        <PlayArrowIcon />
      </div>
      <div className="TrackRow__more">
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default TrackRow;
