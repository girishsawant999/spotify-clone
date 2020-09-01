import React from 'react';
import './trackRow.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function TrackRow(props) {
  return (
    <div class="TrackRow">
      <div className="TrackRow__img">
        <img
          src="https://i.scdn.co/image/ab67616d00001e0265abb9d9670ac2915d7e67fe"
          alt=""
        />
      </div>
      <div className="TrackRow__details">
        <p className="TrackRow__title">Jaan Ban Gaye</p>
        <p className="TrackRow__desc">Mithoon, Vishal Mishra, Asees Kaur</p>
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
