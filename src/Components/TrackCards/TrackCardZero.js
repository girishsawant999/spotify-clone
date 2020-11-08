import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React, { useEffect } from "react";
import "./trackCard.css";

function TrackCard({ track, trackIndex }) {
  useEffect(() => {
    document.getElementById(trackIndex).addEventListener("mouseover", (e) => {
      document.getElementById(`play-${trackIndex}`).style.opacity = 1;
    });

    document.getElementById(trackIndex).addEventListener("mouseleave", (e) => {
      document.getElementById(`play-${trackIndex}`).style.opacity = 0;
    });

    return () => {
      document.removeEventListener("mouseover", (e) => {});
      document.removeEventListener("mouseleave", (e) => {});
    };
  }, []);
  return (
    <div id={trackIndex} className="trackcard">
      <img src={track?.track?.album?.images[1]?.url} alt="" />
      <h4>{track?.track?.name}</h4>
      <p>{track?.track?.artists.map((artist) => artist.name).join(", ")}</p>
      <span id={`play-${trackIndex}`} className="playIcon">
        <PlayArrowIcon />
      </span>
    </div>
  );
}

export default TrackCard;
