import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./playlistCover.css";

function PlaylistCover({ playlist }) {
  return (
    <div>
      <div class="playlist__cover">
        <div class="playlist__image">
          <LazyLoadImage src={playlist?.images[0]?.url} alt="" />
        </div>
        <div class="playlist_details">
          <h2 class="playlist__title">{playlist?.name}</h2>
          <p class="playlist__description">{playlist?.description} </p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCover;
