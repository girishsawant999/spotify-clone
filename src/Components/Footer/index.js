import Slider from "@material-ui/core/Slider";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUp from "@material-ui/icons/VolumeUp";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "./footer.css";

let audio = null;
function Footer(props) {
  const [{ recentTracks }, dispatch] = useDataLayerValue();
  const [value, setValue] = useState(0.3);
  const [trackIndex, settrackIndex] = useState(0);
  const [play, setplay] = useState(false);
  const [shuffle, setshuffle] = useState(true);
  const [repeat, setrepeat] = useState(true);

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
        let r = getRandomInt(0, recentTracks?.items?.length - 1);
        shuffle ? settrackIndex(r) : settrackIndex(trackIndex + 1);
        setplay(true);
      } else if (repeat) {
        settrackIndex(0);
      }
    } else {
      if (trackIndex !== 0) {
        if (audio) playTrack(false);
        let r = getRandomInt(0, recentTracks?.items?.length - 1);
        shuffle ? settrackIndex(r) : settrackIndex(trackIndex - 1);
        setplay(true);
      } else if (repeat) {
        settrackIndex(recentTracks?.items?.length - 1);
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
  }, [play, trackIndex]);

  return (
    <div>
      {recentTracks?.items?.length && (
        <div className="footer">
          <div className="footer__left">
            <LazyLoadImage
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
      )}
    </div>
  );
}

export default Footer;
