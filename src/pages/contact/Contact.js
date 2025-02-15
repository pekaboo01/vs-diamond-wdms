/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : Contact.js
Stylesheet      : Contact.css
Description     : 
    This page shows the users on how they can contact VSDiamond Dental Clinic.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 24, 2025
-------------------------------------------------------------------------------------
*/



import "./Contact.css"
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <title>Contact Us</title>

            <h2>Contact Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/About" className="about">About</Link>
            </div>
        </div>
    )
}