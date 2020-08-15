import React, { useState, useEffect } from 'react';
import './footer.css';
import RepeatIcon from '@material-ui/icons/Repeat';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Slider from '@material-ui/core/Slider';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { useDataLayerValue } from '../DataLayer';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

let audio = null;
function Footer(props) {
  const [{ recentTracks }, dispatch] = useDataLayerValue();
  const [value, setValue] = useState(30);
  const [trackIndex, settrackIndex] = useState(0);
  const [play, setplay] = useState(false);

  const playTrack = (state) => {
    if (state) {
      audio = new Audio(recentTracks?.items[trackIndex]?.track?.preview_url);
      audio.play();
    } else {
      audio.pause();
    }
  };

  const skipTrack = (next) => {
    if (next) {
      if (trackIndex !== recentTracks?.items?.length - 1) {
        if (audio) playTrack(false);
        settrackIndex(trackIndex + 1);
        setplay(true);
      }
    } else {
      if (trackIndex !== 0) {
        if (audio) playTrack(false);
        settrackIndex(trackIndex - 1);
        setplay(true);
      }
    }
  };

  useEffect(() => {
    if (play) {
      playTrack(play);
    } else {
      if (audio) playTrack(play);
    }

    return () => {};
  }, [play, trackIndex]);

  return (
    <div>
      {recentTracks?.items?.length && (
        <div className="footer">
          <div className="footer__left">
            <img
              src={
                recentTracks?.items[trackIndex]?.track?.album?.images[2]?.url
              }
              alt=""
            />
            <div className="footer__details">
              <h4>{recentTracks?.items[trackIndex]?.track?.name}</h4>
              <p>
                {recentTracks?.items[trackIndex]?.track?.artists
                  .map((artist) => artist.name)
                  .join(', ')}
              </p>
            </div>
          </div>
          <div className="footer__center">
            <RepeatIcon className="green" />
            <SkipPreviousIcon
              className="medium"
              onClick={() => {
                if (trackIndex !== 0) settrackIndex(trackIndex - 1);
              }}
            />
            {play ? (
              <PauseCircleFilledIcon
                className="main"
                onClick={() => setplay(false)}
              />
            ) : (
              <PlayCircleFilledIcon
                className="main"
                onClick={() => setplay(true)}
              />
            )}

            <SkipNextIcon
              className="medium"
              onClick={() => {
                skipTrack(true);
              }}
            />
            <ShuffleIcon className="green" />
          </div>
          <div className="footer__right">
            <VolumeOffIcon />
            <Slider
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              aria-labelledby="continuous-slider"
            />
            <VolumeUp />
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
