import React from 'react';
import './login.css'
import logo from '../Assets/images/logo.gif'
import { loginUrl } from '../Spotify'

function Login(props) {
    return (
        <div className="login">
            <img src={logo} alt="logo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;