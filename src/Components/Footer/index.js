import Slider from '@material-ui/core/Slider';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import React, { useCallback, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDataLayerValue } from '../../DataLayer';
import './footer.css';

let audio = new Audio();
function Footer(props) {
  const [{ recentTracks, currentTrack, play }, dispatch] = useDataLayerValue();
  const [value, setValue] = useState(0.3);
  const [trackIndex, settrackIndex] = useState(0);
  const [shuffle, setshuffle] = useState(true);
  const [repeat, setrepeat] = useState(true);

  const skipTrack = useCallback(
    (next) => {
      if (next) {
        if (trackIndex !== recentTracks?.items?.length - 1) {
          let r = getRandomInt(0, recentTracks?.items?.length - 1);
          shuffle ? settrackIndex(r) : settrackIndex(trackIndex + 1);
        } else if (repeat) {
          settrackIndex(0);
        }
      } else {
        if (trackIndex !== 0) {
          let r = getRandomInt(0, recentTracks?.items?.length - 1);
          shuffle ? settrackIndex(r) : settrackIndex(trackIndex - 1);
        } else if (repeat) {
          settrackIndex(recentTracks?.items?.length - 1);
        }
      }
    },
    [recentTracks, repeat, shuffle, trackIndex]
  );

  const onAudioEnded = useCallback(
    (audio) => {
      skipTrack(true);
      audio.removeEventListener('ended', () => onAudioEnded(audio));
    },
    [skipTrack]
  );

  const playTrack = useCallback(
    (state) => {
      if (currentTrack) {
        if (state) {
          audio.src = currentTrack.preview_url;
          audio.play();
          audio.addEventListener('ended', () => onAudioEnded(audio));
        } else {
          audio.pause();
        }
      }
    },
    [currentTrack, onAudioEnded]
  );

  const getRandomInt = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    if (recentTracks?.items?.length > 0) {
      dispatch({
        currentTrack: recentTracks?.items[trackIndex]?.track,
      });
    }
    return () => {};
  }, [recentTracks, dispatch, trackIndex]);

  useEffect(() => {
    const element = document.getElementById('player_body');
    if (currentTrack && element.classList.value.includes('player_body_h100')) {
      element && element.classList.remove('player_body_h100');
    } else if (
      !currentTrack &&
      !element.classList.value.includes('player_body_h100')
    ) {
      element && element.classList.add('player_body_h100');
    }
    return () => {};
  }, [currentTrack]);

  useEffect(() => {
    playTrack(play);
  }, [play, trackIndex, playTrack]);

  return (
    <>
      {currentTrack && (
        <div className='footer'>
          <div className='footer__left'>
            <LazyLoadImage src={currentTrack?.album?.images[2]?.url} alt='' />
            <div className='footer__details'>
              <h4>{currentTrack?.name}</h4>
              <p>
                {currentTrack?.artists.map((artist) => artist.name).join(', ')}
              </p>
            </div>
          </div>
          <div className='footer__center'>
            <RepeatIcon
              className={repeat ? 'green' : ''}
              onClick={() => setrepeat(!repeat)}
            />
            <SkipPreviousIcon
              className='medium'
              onClick={() => {
                skipTrack(false);
              }}
            />
            {play ? (
              <PauseCircleFilledIcon
                className='main'
                onClick={() => dispatch({ play: false })}
              />
            ) : (
              <PlayCircleFilledIcon
                className='main'
                onClick={() => dispatch({ play: true })}
              />
            )}

            <SkipNextIcon
              className='medium'
              onClick={() => {
                skipTrack(true);
              }}
            />
            <ShuffleIcon
              className={shuffle ? 'green' : ''}
              onClick={() => setshuffle(!shuffle)}
            />
          </div>
          <div className='footer__right'>
            <VolumeOffIcon />
            <Slider
              value={value * 100}
              onChange={(event, newValue) => {
                if (audio) audio.volume = newValue / 100;
                setValue(newValue / 100);
              }}
              aria-labelledby='continuous-slider'
            />
            <VolumeUp />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
