import MoreVertIcon from "@material-ui/icons/MoreVert";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "./trackRow.css";

function TrackRow({ track }) {
  const [{ currentTrack, play }, dispatch] = useDataLayerValue();

  const playTrack = (track) => {
    dispatch({
      currentTrack: {
        trackUrl: track?.preview_url,
        trackImg: track?.album?.images[2]?.url,
        trackName: track?.name,
        trackArtists: track?.artists,
      },
      play: true,
    });
  };
  const pauseTrack = (track) => {
    dispatch({ play: false });
  };

  return (
    <div class="TrackRow">
      <div className="TrackRow__img">
        <div className="TrackRow__img_conatiner">
          <LazyLoadImage src={track?.track?.album?.images[2]?.url} alt="" />
        </div>
      </div>
      <div className="TrackRow__details">
        <p className="TrackRow__title">{track?.track?.name}</p>
        <p className="TrackRow__desc">
          {track?.track?.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
      <div className="TrackRow__playButton">
        {play && currentTrack?.trackUrl === track?.track?.preview_url ? (
          <PauseIcon onClick={() => pauseTrack(track?.track)} />
        ) : (
          <PlayArrowIcon onClick={() => playTrack(track?.track)} />
        )}
      </div>
      <div className="TrackRow__more">
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default TrackRow;
