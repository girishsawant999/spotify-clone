import React, { useEffect } from 'react';
import './trackCard.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';

function TrackCard({ track, trackIndex }) {
  useEffect(() => {
    document.getElementById(trackIndex).addEventListener('mouseover', (e) => {
      document.getElementById(`play-${trackIndex}`).style.opacity = 1;
    });

    document.getElementById(trackIndex).addEventListener('mouseleave', (e) => {
      document.getElementById(`play-${trackIndex}`).style.opacity = 0;
    });

    return () => {
      document.removeEventListener('mouseover', (e) => {});
      document.removeEventListener('mouseleave', (e) => {});
    };
  }, []);
  return (
    <Link to={`/playlist/${track?.id}`}>
      <div id={trackIndex} className="trackcard">
        <img src={track?.images[0]?.url} alt="" />
        <h4>{track?.name}</h4>
        <p>{track?.description}</p>
        <span id={`play-${trackIndex}`} className="playIcon">
          <PlayArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default TrackCard;
