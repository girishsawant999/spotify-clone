import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./playlistCover.css";

function PlaylistCover({ playlist }) {
  return (
    <div>
      <div className="playlist__cover">
        <div className="playlist__image">
          <LazyLoadImage src={playlist?.images[0]?.url} alt="" />
        </div>
        <div className="playlist_details">
          <h2 className="playlist__title">{playlist?.name}</h2>
          <p className="playlist__description">{playlist?.description} </p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCover;
