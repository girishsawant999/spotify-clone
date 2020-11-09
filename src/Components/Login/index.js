import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../Assets/images/logo.gif";
import { loginUrl } from "../../Spotify";
import "./login.css";

function Login(props) {
  return (
    <div className="login">
      <LazyLoadImage src={logo} alt="logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
