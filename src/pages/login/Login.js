import React from "react";
import "./Login.css";
import Header from "../../components/head-homepage/HeadHomepage";
import Copyright from "../../components/copyright/Copyright"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="index-wrapper1"> 
      <title>VSDiamond Dental Website - Login or Register</title>
      <Header />

      <div className="login-container">

        <p className="welcome-text">
          Welcome back <span className="enter-credentials-text">Please enter your account details</span>
        </p>

        
        <input type="text" placeholder="Email" className="email-input"/>
        <input type="text" placeholder="Password" className="password-input"/>

        <Link to="/forgot-password"
          className="forgot-password"
        >
        Forgot Password</Link>

        <button
          className="signin-button"
        >
          Sign in
        </button>

        <p className="signup-text-container"
        >
          Don't have an account? <Link to="/signup" className="signup-link-text"
          >Sign Up</Link>
        </p>
      </div>
      

      <Copyright/>
    </div>
  )
}

export default Login;