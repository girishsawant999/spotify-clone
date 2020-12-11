import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { withRouter } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer";
import { checkLocalStorageCompatibility } from "../../Utils";

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    padding: "30px",
    "@media (max-width: 768px)": {
      padding: "15px",
    },
  },
  Buttons: {
    background: "hsl(0deg 0% 16%)",
    color: "#c5c5c5",
    "&:hover": {
      background: "hsl(0deg 0% 15%)",
    },
  },
}));

function MyProfile({ history }) {
  const [{ user }, dispatch] = useDataLayerValue();
  const classes = useStyles();

  const logout = () => {
    checkLocalStorageCompatibility() && localStorage.removeItem("_token");
    history.push("/");
    dispatch({ token: null });
  };

  const onBackClick = () => {
    history.push("/");
  };

  console.log("user", user);
  return (
    <Grid container className={classes.MainContainer}>
      <Grid item xs={12}>
        <Box mb={4} display="flex" justifyContent="space-between">
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
      <Grid item xs={12}>
        <Typography variant="h2" color="initial">
          Coming Soon!
        </Typography>
      </Grid>
      <Box display="none">
        <Grid item xs={4}>
          <Avatar>
            {user?.images?.length ? (
              <LazyLoadImage src={user?.images[0]} />
            ) : (
              <PersonOutlineIcon className="body__avatar" />
            )}
          </Avatar>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">{user?.display_name}</Typography>
        </Grid>
      </Box>
    </Grid>
  );
}

export default withRouter(MyProfile);
