import { ButtonBase, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Disc from "../../Assets/images/disc.svg";
import { useDataLayerValue } from "../../DataLayer";
import AnimatedPlaying from "../AnimatedPlaying";

const useStyles = makeStyles((theme) => ({
  buttonBase: { margin: "0px 5px", padding: "4px", borderRadius: "5px" },
  card: {
    height: "fit-content",
    width: "10vw",
    minWidth: "250px",
    padding: "inherit",
    borderRadius: "inherit",
    backgroundColor: "hsl(0deg 0% 16%)",
  },
  card_img_div: {
    height: "55px",
    borderRadius: "50%",
    background: "#00000024",
    backgroundImage: `url(${Disc})`,
    backgroundSize: "100% 100%",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
  },
  card_img: {
    height: "100%",
    borderRadius: "inherit",
  },
  card_title: {
    width: "100%",
    textAlign: "start",
    overflow: "hidden",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  card_desc: {
    fontSize: "smaller",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  card_playing_status: {
    height: "55px",
  },
}));

function RecentTrackCard({ track, trackIndex }) {
  const classes = useStyles();
  const [{ currentTrack, play }, dispatch] = useDataLayerValue();

  const playTrack = (track) => {
    dispatch({
      currentTrack: {
        trackUrl: track?.track?.preview_url,
        trackImg: track?.track?.album?.images[2]?.url,
        trackName: track?.track?.name,
        trackArtists: track?.track?.artists,
      },
      play: true,
    });
  };

  const pauseTrack = (track) => {
    dispatch({ play: false });
  };

  const clickAction = (track) => {
    if (play && currentTrack?.trackUrl === track?.track?.preview_url)
      pauseTrack(track);
    else playTrack(track);
  };

  return (
    <ButtonBase
      className={classes.buttonBase}
      onClick={() => clickAction(track)}
    >
      <Grid container spacing={1} alignItems="center" className={classes.card}>
        <Grid item xs={3} className={classes.card_img_div}>
          {track?.track?.album?.images[1]?.url && (
            <LazyLoadImage
              className={classes.card_img}
              src={track?.track?.album?.images[1]?.url}
            />
          )}
        </Grid>
        <Grid item xs={8} container spacing={1} justify="flex-start">
          <Typography className={classes.card_title}>
            {track?.track?.name}
          </Typography>
          <Typography className={classes.card_desc}>
            {track?.track?.artists.map((artist) => artist.name).join(", ")}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.card_playing_status}>
          {play && currentTrack?.trackUrl === track?.track?.preview_url && (
            <AnimatedPlaying />
          )}
        </Grid>
      </Grid>
    </ButtonBase>
  );
}

export default RecentTrackCard;
