import React from "react";
import "./style.css";

function Track({ track, dispatch }) {
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

  return (
    <div className="Track" onClick={() => playTrack(track)}>
      <div className="track_img">
        <div className="track_img_container">
          <img src={track?.album?.images[2]?.url} alt="" />
        </div>
      </div>
      <div className="track_name">{track.name}</div>
    </div>
  );
}

export default Track;
