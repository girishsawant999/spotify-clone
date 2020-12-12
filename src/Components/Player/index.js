import React from 'react';
import Routes from '../../Routes';
import Footer from '../Footer';
import './player.css';

function Player(props) {
  return (
    <div className='player'>
      <div id='player_body' className='player_body player_body_h100'>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
