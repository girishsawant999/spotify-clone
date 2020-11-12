import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./trackCard.css";

function TrackCard({ track, trackIndex }) {
  const initilize = (params) => {
    document.getElementById(trackIndex).addEventListener("mouseover", (e) => {
      if (document.getElementById(`play-${trackIndex}`))
        document.getElementById(`play-${trackIndex}`).style.opacity = 1;
    });

    document.getElementById(trackIndex).addEventListener("mouseleave", (e) => {
      if (document.getElementById(`play-${trackIndex}`))
        document.getElementById(`play-${trackIndex}`).style.opacity = 0;
    });

    return () => {
      document.removeEventListener("mouseover", (e) => {});
      document.removeEventListener("mouseleave", (e) => {});
    };
  };
  useEffect(initilize, []);

  return (
    <Link to={`/playlist/${track?.id}`}>
      <div id={trackIndex} className="trackcard">
        <LazyLoadImage src={track?.images[0]?.url} />
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
