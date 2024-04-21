import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDataLayerValue } from '../../DataLayer';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    padding: '30px',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
  },
  Buttons: {
    background: 'hsl(0deg 0% 16%)',
    color: '#c5c5c5',
    '&:hover': {
      background: 'hsl(0deg 0% 15%)',
    },
  },
  Avatar: {
    height: '100%',
    width: '100%',
  },
  ProfileIcon: {
    width: '75%',
    height: '75%',
  },
  Divider: {
    background: '#282828',
  },
}));

function MyProfile() {
  const [{ user }, dispatch] = useDataLayerValue();
  const classes = useStyles();
    const navigate = useNavigate();


  const logout = () => {
    navigate('/');
    dispatch({ action: 'LOGOUT' });
  };

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <Grid container className={classes.MainContainer}>
      <Grid item xs={12}>
        <Box mb={4} display='flex' justifyContent='space-between'>
          <Button className={classes.Buttons} onClick={onBackClick}>
            <ArrowBackIosIcon />
            BACK
          </Button>
          <Button className={classes.Buttons} onClick={logout}>
            Logout &nbsp;
            <ExitToAppIcon />
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} md={3} justifyContent='center'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          m='auto'
          height='30vh'
          width='30vh'
          maxWidth='90%'>
          <Avatar className={classes.Avatar}>
            {user?.images?.length ? (
              <LazyLoadImage src={user?.images[0]} />
            ) : (
              <PersonOutlineIcon className={classes.ProfileIcon} />
            )}
          </Avatar>
        </Box>
      </Grid>

      <Hidden mdUp>
        <Grid item xs={12}>
          <Box mt={2}>
            <Divider className={classes.Divider} />
          </Box>
        </Grid>
      </Hidden>

      {user && (
        <Grid item xs={12} md={9}>
          <Box height='100%' width='100%' display='flex' alignItems='flex-end'>
            <Hidden mdDown>
              <Box height='100%' mr={2}>
                <Divider orientation='vertical' className={classes.Divider} />
              </Box>
            </Hidden>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant='h3'>{user?.display_name}</Typography>
              </Grid>
              <Grid item xs={12}>
                {user?.followers?.total === 0 ? (
                  <Chip
                    size='small'
                    label={<Typography>No followers</Typography>}
                  />
                ) : (
                  <Chip
                    size='small'
                    avatar={<Avatar>{10}</Avatar>}
                    label={<Typography>followers</Typography>}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default (MyProfile);
