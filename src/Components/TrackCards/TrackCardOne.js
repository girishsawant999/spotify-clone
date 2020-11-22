import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./trackCard.css";

function TrackCard({ track, trackIndex }) {
  return (
    <Link to={`/playlist/${track?.id}`}>
      <div id={trackIndex} className="trackcard">
        <div className="track_img">
          {track?.images[0]?.url && (
            <LazyLoadImage src={track?.images[0]?.url} />
          )}
        </div>
        <h4>{track?.name}</h4>
        <p>{track?.description}</p>
      </div>
    </Link>
  );
}

export default TrackCard;
