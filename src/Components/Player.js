import React from 'react';
import './player.css';
import Footer from './Footer';
import Routes from '../Routes';

function Player(props) {
  return (
    <div className="player">
      <div className="player_body">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
