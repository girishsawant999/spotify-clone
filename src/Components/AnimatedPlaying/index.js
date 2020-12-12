import React from 'react';
import './style.css';

function AnimatedPlaying(props) {
  return (
    <div id='playingLoader' className='playingLoader'>
      <span style={{ '--i': 1 }}></span>
      <span style={{ '--i': 2 }}></span>
      <span style={{ '--i': 3 }}></span>
    </div>
  );
}

export default AnimatedPlaying;
