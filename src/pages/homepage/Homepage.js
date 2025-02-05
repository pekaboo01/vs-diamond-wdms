/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : February 02, 2024
File            : Homepage.js
Stylesheet      : Homepage.css
Description     : 
    This page shows the homepage of the website. This will be the index page as it
will show the features of the website such as the sign up and login feature, viewing
of the services, and etc.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: February 02, 2025
-------------------------------------------------------------------------------------
*/



import React, { useState } from "react";
import "./Homepage.css";
import Header from "../../components/head-homepage/HeadHomepage"
import image from "../../assets/index/image.png";
import Copyright from "../../components/copyright/Copyright"
import { useNavigate } from "react-router-dom";


const Homepage = () => {

    const navigate = useNavigate();

    return (
        <div className="index-wrapper1">
            <title>VSDiamond Dental Website - Homepage</title>

            <Header />

            <div className="clinic-motto-and-information-container">
                <p className="clinic-motto">
                    Smile Bright 
                    <span className="clinic-motto-second-line">Like a Diamond</span>
                </p>
                <button className="view-our-services-button"
                    onClick={() => navigate("/view-services")}
                >
                    View Our Services
                </button>

                <button className="view-dental-portfolio-button"
                    onClick={() => navigate("/view-dental-portfolio")}
                >
                    View Dental Portfolio
                </button>
            </div>

            <div className="image-container">
                <img src={image} className="image-bg"/>
                
            </div>
            <Copyright/>
        </div>

    );
};

export default Homepage;