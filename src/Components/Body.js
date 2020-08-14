import React from 'react';
import './body.css';
import { useDataLayerValue } from '../DataLayer';
import BodyHeader from './BodyHeader';
import TrackCard from './TrackCard';

function Body() {
  const [{ recentTracks }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <BodyHeader />
      <h2>Recently played</h2>
      <div className="trackCardsContainer">
        {recentTracks?.items?.map((item, index) => (
          <TrackCard track={item} trackIndex={index} />
        ))}
      </div>
    </div>
  );
}

export default Body;
