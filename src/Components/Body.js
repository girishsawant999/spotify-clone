import React from 'react';
import './body.css';
import { useDataLayerValue } from '../DataLayer';
import BodyHeader from './BodyHeader';
import TrackCard from './TrackCardZero';
import TracksContainer from './TracksContainer';

function Body() {
  const [{ recentTracks, currentCategory }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <BodyHeader />
      <TracksContainer
        tracks={recentTracks}
        name={'Recently Played'}
        type={0}
      />

      <TracksContainer
        tracks={currentCategory?.playlists}
        name={'Top list'}
        type={1}
      />
    </div>
  );
}

export default Body;
