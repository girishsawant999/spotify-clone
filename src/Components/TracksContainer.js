import React from 'react';
import './body.css';
import TrackCardZero from './TrackCardZero';
import TrackCardOne from './TrackCardOne';

function TracksContainer({ tracks, name, type }) {
  return tracks?.items ? (
    <div className="tracksRow">
      <h2>{name}</h2>
      <div className="trackCardsContainer">
        {type === 0 &&
          tracks?.items?.map((item, index) => (
            <TrackCardZero track={item} trackIndex={index + name} />
          ))}
        {type === 1 &&
          tracks?.items?.map((item, index) => (
            <TrackCardOne track={item} trackIndex={index + name} />
          ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default TracksContainer;