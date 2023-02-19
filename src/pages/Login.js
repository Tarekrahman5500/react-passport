import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";

const Login = () => {

    const googleLogin = () => {
        window.open("http://localhost:5000/auth//google","_self")
    }
    return (
        <div className="login">
             <h1 className="loginTitle">Choose Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={googleLogin}>
                        <h1><FcGoogle  className="icon"/></h1>
                        <h1>Google</h1>
                    </div>
                    <div className="loginButton facebook">
                        <h1> <AiFillFacebook className="icon"/></h1>
                        <h1>Facebook</h1>
                    </div>
                    <div className="loginButton github">
                        <h1><FaGithub className="icon"/></h1>
                        <h1>Github</h1>
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                     <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" name="" id="name" placeholder="Name"/>
                    <input type="password" name="" id="password" placeholder="password"/>
                    <button className="submit" type="submit">Login</button>
                </div>
            </div>
        </div>

    );
};

export default Login;