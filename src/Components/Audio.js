import React from 'react';

function AudioComp({ currentTrack }) {
  const main = () => {
    let audio = null;
    if (currentTrack?.url) {
      audio = new Audio(currentTrack?.url);
      if (currentTrack?.state) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return <div>{main()}</div>;
}

export default React.memo(AudioComp);
