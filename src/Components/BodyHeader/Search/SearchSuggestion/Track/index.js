import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Disc from "../../../../../Assets/images/disc.svg";
import { useDataLayerValue } from "../../../../../DataLayer";
import AnimatedPlaying from "../../../../AnimatedPlaying";

const useStyles = makeStyles((theme) => ({
  TrackRow: {
    borderRadius: "10px",
  },
  Avatar: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    borderRadius: "50%",
    background: "#00000024",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    backgroundImage: `url(${Disc})`,
    backgroundSize: "100% 100%",
  },
  PlayingIcon: {
    height: theme.spacing(5),
    width: theme.spacing(1.5),
  },
}));

function Track({ track }) {
  const classes = useStyles();
  const [{ currentTrack, play }, dispatch] = useDataLayerValue();

  const playPauseTrack = (track) => {
    if (play && currentTrack?.trackUrl === track?.preview_url) {
      dispatch({
        play: false,
      });
    } else {
      dispatch({
        currentTrack: {
          trackUrl: track?.preview_url,
          trackImg: track?.album?.images[2]?.url,
          trackName: track?.name,
          trackArtists: track?.artists,
        },
        play: true,
      });
    }
  };

  return (
    <>
      <ListItem
        button
        className={classes.TrackRow}
        onClick={() => playPauseTrack(track)}
      >
        <ListItemIcon>
          {track?.album?.images[2]?.url && (
            <Avatar
              className={classes.Avatar}
              alt="track"
              src={track?.album?.images[2]?.url}
            />
          )}
        </ListItemIcon>
        <ListItemText primary={track.name} />
        <Box className={classes.PlayingIcon}>
          {play && currentTrack?.trackUrl === track?.preview_url && (
            <AnimatedPlaying />
          )}
        </Box>
      </ListItem>
      <Divider variant="middle" />
    </>
  );
}

export default Track;
