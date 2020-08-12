import React from 'react';
import './player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player(props) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
