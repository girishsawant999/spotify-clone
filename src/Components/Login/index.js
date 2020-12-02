import React from "react";
import logo from "../../Assets/images/logo.mp4";
import { loginUrl } from "../../Spotify";
import "./login.css";

function Login(props) {
  return (
    <div className="login">
      <video src={logo} alt="logo" autoPlay muted loop />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
