import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "./trackCard.css";

function TrackCard({ track, trackIndex }) {
  const [{ currentTrack, play }, dispatch] = useDataLayerValue();
  const [showButton, setshowButton] = useState(false);

  const playTrack = (track) => {
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

  const pauseTrack = (track) => {
    dispatch({ play: false });
  };

  return (
    <div
      id={trackIndex}
      className="trackcard"
      onMouseOver={() => setshowButton(true)}
      onMouseLeave={() => setshowButton(false)}
    >
      <LazyLoadImage src={track?.track?.album?.images[1]?.url} />
      <h4>{track?.track?.name}</h4>
      <p>{track?.track?.artists.map((artist) => artist.name).join(", ")}</p>
      {(showButton || currentTrack?.trackUrl === track?.track?.preview_url) && (
        <span id={`play-${trackIndex}`} className="playIcon">
          {play && currentTrack?.trackUrl === track?.track?.preview_url ? (
            <PauseIcon onClick={() => pauseTrack(track)} />
          ) : (
            <PlayArrowIcon onClick={(e) => playTrack(track)} />
          )}
        </span>
      )}
    </div>
  );
}

export default TrackCard;
