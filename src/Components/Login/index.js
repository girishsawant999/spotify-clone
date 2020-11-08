import React from "react";
import logo from "../../Assets/images/logo.gif";
import { loginUrl } from "../../Spotify";
import "./login.css";

function Login(props) {
  return (
    <div className="login">
      <img src={logo} alt="logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
