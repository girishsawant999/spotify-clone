import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { lazy } from 'react';

const RecentTrackCard = lazy(() =>
  import(/*RecentTrackCard*/ '../RecentTrackCard')
);
const PlaylistCard = lazy(() => import(/*PlaylistCard*/ '../PlaylistCard'));

const useStyles = makeStyles((theme) => ({
  tittle: {
    margin: '15px 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  CardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    overflowX: 'auto',
    borderRadius: '10px',
    scrollBehavior: 'smooth',
  },
  displayInherit: {
    display: 'inherit',
  },
}));

function CategoryContainer({ category, name, type }) {
  const classes = useStyles();

  return (
    <Grid key={name} id={name}>
      {category?.items?.length > 0 && (
        <Typography className={classes.tittle}>{name}</Typography>
      )}
      <Grid className={classes.CardsContainer}>
        {type === 0 && category?.items?.length > 0 && (
          <Grid container className={classes.displayInherit}>
            <Box mb={1} className={classes.displayInherit}>
              {category?.items
                ?.slice(0, category?.items?.length / 2)
                .map((item, index) => (
                  <RecentTrackCard track={item} key={index + name} />
                ))}
            </Box>
            <Box className={classes.displayInherit}>
              {category?.items
                ?.slice(category?.items?.length / 2)
                .map((item, index) => (
                  <RecentTrackCard track={item} key={index + name} />
                ))}
            </Box>
          </Grid>
        )}
        {type === 1 &&
          category?.items?.map((item, index) => (
            <PlaylistCard key={`key-${index}`} playlist={item} />
          ))}
      </Grid>
    </Grid>
  );
}

export default CategoryContainer;
