import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "./trackCard.css";

function TrackCard({ track, trackIndex }) {
  const dispatch = useDataLayerValue()[1];

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

  const playTrack = (event, track) => {
    event.preventDefault();
    dispatch({
      currentTrack: {
        trackUrl: track?.track?.preview_url,
        trackImg: track?.track?.album?.images[2]?.url,
        trackName: track?.track?.name,
        trackArtists: track?.track?.artists,
      },
      play: true,
    });
  };
  return (
    <div id={trackIndex} className="trackcard">
      <LazyLoadImage src={track?.track?.album?.images[1]?.url} />
      <h4>{track?.track?.name}</h4>
      <p>{track?.track?.artists.map((artist) => artist.name).join(", ")}</p>
      <span
        id={`play-${trackIndex}`}
        className="playIcon"
        onClick={(e) => playTrack(e, track)}
      >
        <PlayArrowIcon />
      </span>
    </div>
  );
}

export default TrackCard;
