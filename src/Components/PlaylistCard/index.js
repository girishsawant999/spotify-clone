import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Disc from '../../Assets/images/disc.svg';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  buttonBase: {
    margin: '0px 5px',
    borderRadius: '10px',
  },
  trackcard: {
    height: 'fit-content',
    width: '10vw',
    padding: '20px',
    backgroundColor: 'hsl(0deg 0% 16%)',
    position: 'relative',
    minWidth: '150px',
    borderRadius: 'inherit',
  },
  track_img: {
    width: 'inherit',
    marginBottom: '10px',
    height: '150px',
    minWidth: '150px',
    background: '#00000024',
    backgroundImage: `url(${Disc})`,
    backgroundSize: '100% 100%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  },

  track_img_img: {
    width: '100%',
    height: '100%',
  },

  playlist_title: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginBottom: '10px',
    fontWeight: 'bold',
  },

  playlist_desc: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: 'x-small',
    marginBottom: '5px',
  },
}));

function PlaylistCard({ playlist }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const gotoPlaylistView = (playlist) => {
    navigate(`/playlist/${playlist?.id}`);
  };

  return (
    <ButtonBase
      className={classes.buttonBase}
      onClick={() => gotoPlaylistView(playlist)}>
      <Grid className={classes.trackcard}>
        <Grid className={classes.track_img}>
          {playlist?.images[0]?.url && (
            <LazyLoadImage
              src={playlist?.images[0]?.url}
              className={classes.track_img}
            />
          )}
        </Grid>
        <Typography className={classes.playlist_title}>
          {playlist?.name}
        </Typography>
        <Typography className={classes.playlist_desc}>
          {playlist?.description}
        </Typography>
      </Grid>
    </ButtonBase>
  );
}

export default (PlaylistCard);
