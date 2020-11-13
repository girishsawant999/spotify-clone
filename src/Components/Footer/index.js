import Slider from "@material-ui/core/Slider";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUp from "@material-ui/icons/VolumeUp";
import React, { useCallback, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "./footer.css";

let audio = null;
function Footer(props) {
  const [{ recentTracks, currentTrack, play }, dispatch] = useDataLayerValue();
  const [value, setValue] = useState(0.3);
  const [trackIndex, settrackIndex] = useState(0);
  const [shuffle, setshuffle] = useState(true);
  const [repeat, setrepeat] = useState(true);

  useEffect(() => {
    if (recentTracks?.items) {
      dispatch({
        currentTrack: {
          trackUrl: recentTracks?.items[0]?.track?.preview_url,
          trackImg: recentTracks?.items[0]?.track?.album?.images[2]?.url,
          trackName: recentTracks?.items[0]?.track?.name,
          trackArtists: recentTracks?.items[0]?.track?.artists,
        },
      });
    }
    return () => {};
  }, [recentTracks, dispatch]);

  const playTrack = useCallback(
    (state) => {
      if (currentTrack) {
        if (state) {
          if (audio) audio.pause();
          audio = new Audio(currentTrack.trackUrl);
          audio.play();
        } else {
          audio.pause();
        }
      }
    },
    [currentTrack]
  );

  const skipTrack = (next) => {
    if (next) {
      if (trackIndex !== recentTracks?.items?.length - 1) {
        let r = getRandomInt(0, recentTracks?.items?.length - 1);
        shuffle ? settrackIndex(r) : settrackIndex(trackIndex + 1);
        dispatch({
          currentTrack: {
            trackUrl: recentTracks?.items[trackIndex]?.track?.preview_url,
            trackImg:
              recentTracks?.items[trackIndex]?.track?.album?.images[2]?.url,
            trackName: recentTracks?.items[trackIndex]?.track?.name,
            trackArtists: recentTracks?.items[trackIndex]?.track?.artists,
          },
          play: true,
        });
      } else if (repeat) {
        settrackIndex(0);
        dispatch({
          currentTrack: {
            trackUrl: recentTracks?.items[trackIndex]?.track?.preview_url,
            trackImg:
              recentTracks?.items[trackIndex]?.track?.album?.images[2]?.url,
            trackName: recentTracks?.items[trackIndex]?.track?.name,
            trackArtists: recentTracks?.items[trackIndex]?.track?.artists,
          },
          play: true,
        });
      }
    } else {
      if (trackIndex !== 0) {
        let r = getRandomInt(0, recentTracks?.items?.length - 1);
        shuffle ? settrackIndex(r) : settrackIndex(trackIndex - 1);
        dispatch({
          currentTrack: {
            trackUrl: recentTracks?.items[trackIndex]?.track?.preview_url,
            trackImg:
              recentTracks?.items[trackIndex]?.track?.album?.images[2]?.url,
            trackName: recentTracks?.items[trackIndex]?.track?.name,
            trackArtists: recentTracks?.items[trackIndex]?.track?.artists,
          },
          play: true,
        });
      } else if (repeat) {
        settrackIndex(recentTracks?.items?.length - 1);
        dispatch({
          currentTrack: {
            trackUrl: recentTracks?.items[trackIndex]?.track?.preview_url,
            trackImg:
              recentTracks?.items[trackIndex]?.track?.album?.images[2]?.url,
            trackName: recentTracks?.items[trackIndex]?.track?.name,
            trackArtists: recentTracks?.items[trackIndex]?.track?.artists,
          },
          play: true,
        });
      }
    }
  };

  const getRandomInt = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    if (play) {
      playTrack(play);
    } else {
      if (audio) playTrack(play);
    }

    return () => {};
  }, [play, trackIndex, playTrack]);

  return (
    <>
      {currentTrack ? (
        <div className="footer">
          <div className="footer__left">
            <LazyLoadImage src={currentTrack?.trackImg} alt="" />
            <div className="footer__details">
              <h4>{currentTrack?.trackName}</h4>
              <p>
                {currentTrack?.trackArtists
                  .map((artist) => artist.name)
                  .join(", ")}
              </p>
            </div>
          </div>
          <div className="footer__center">
            <RepeatIcon
              className={repeat ? "green" : ""}
              onClick={() => setrepeat(!repeat)}
            />
            <SkipPreviousIcon
              className="medium"
              onClick={() => {
                skipTrack(false);
              }}
            />
            {play ? (
              <PauseCircleFilledIcon
                className="main"
                onClick={() => dispatch({ play: false })}
              />
            ) : (
              <PlayCircleFilledIcon
                className="main"
                onClick={() => dispatch({ play: true })}
              />
            )}

            <SkipNextIcon
              className="medium"
              onClick={() => {
                skipTrack(true);
              }}
            />
            <ShuffleIcon
              className={shuffle ? "green" : ""}
              onClick={() => setshuffle(!shuffle)}
            />
          </div>
          <div className="footer__right">
            <VolumeOffIcon />
            <Slider
              value={value * 100}
              onChange={(event, newValue) => {
                if (audio) audio.volume = newValue / 100;
                setValue(newValue / 100);
              }}
              aria-labelledby="continuous-slider"
            />
            <VolumeUp />
          </div>
        </div>
      ) : (
        <div className="footer footer_empty"></div>
      )}
    </>
  );
}

export default Footer;
