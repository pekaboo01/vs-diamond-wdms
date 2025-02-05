/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : HomePatient.js
Stylesheet      : HomePatient.css
Description     : 
    This page shows the homepage of the patient. This will be their dashboard where
most of the features of the web application can be accessed.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import Header from "../../components/head-patient/HeadPatient"
import "./HomePatient.css"
import Copyright from "../../components/copyright/Copyright"
import { Link } from "react-router-dom"

export default function HomePatient() {

    
    return (
        <div className="wrapper-patient">
            <title>Dashboard</title>

            <Header />
            <div className="links">
                <Link to="/About" className="about">About</Link>
                <Link to="/Faqs" className="faqs">FAQS</Link>
                <Link to="/Contact" className="faqs">Contact Us</Link>
                <Link to="/patient-th">
                    <button className="patient-th-button">Treatment History</button>
                </Link>
                <Link to="/change-password">
                    <button className="patient-change-password">Change Password</button>
                </Link>
                <Link to="/homepage">
                    <button className="logout-button">Logout</button>
                </Link>
                

            </div>
            <div className="def-wrapper">
                <p className="def">A premier dental clinic in the south Cebu City, Philippines ready to bring brighter smiles with excellent service at affordable rates. </p>
            </div>
            <div className="tagline-wrapper">
                <p className="tagline">Smile bright like a Diamond</p>
            </div>
            <Copyright />
        </div>
    )
}