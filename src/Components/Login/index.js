import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../Assets/images/logo.gif";
import { loginUrl } from "../../Spotify";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    padding: "20px",
    backgroundColor: "#1db954",
    borderRadius: "99px",
    color: "white",
    fontWeight: "800",
    boxShadow: "0 3px 5px 2px rgba(29, 185, 84, .3)",
    transition: "200ms",
    "&:hover": {
      padding: "19px",
      boxShadow: "0 3px 3px 1px rgba(29, 185, 84, .3)",
      backgroundColor: "#1db954",
    },
  },
}));

function Login(props) {
  const classes = useStyles();

  const onLoginClick = () => {
    window.location.href = loginUrl;
  };

  return (
    <div className="login">
      <LazyLoadImage src={logo} alt="logo" />
      <Button onClick={onLoginClick} className={classes.loginButton}>
        LOGIN WITH SPOTIFY
      </Button>
    </div>
  );
}

export default Login;
