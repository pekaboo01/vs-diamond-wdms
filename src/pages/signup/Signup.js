import React, { useState } from "react";
import "./Signup.css";
import Header from "../../components/head-homepage/HeadHomepage";
import Copyright from "../../components/copyright/Copyright";
import patientImage from "../../assets/index/patient.png";
import personnelImage from "../../assets/index/personnel.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showForm, setShowForm] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserSelection = (type) => {
    setUserType(type); 
    setShowForm(true); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userType === "patient") {
      navigate("/home-patient");
    } else if (userType === "personnel") {
      navigate("/home-personnel");
    }
  };

  return (
    <div>
      <title>VSDiamond Dental Website - Register</title>
      <Header />

      <div className="signup-container">
        <p className="create-account-text">
          Create an account <span className="choose-account-text">Please choose</span>
        </p>

        <div className="choose-account-container">
          <button className="personnel-image-button" onClick={() => handleUserSelection("personnel")}>
            <img className="personnel-image" src={personnelImage} alt="Personnel"/>
          </button>

          <button className="patient-image-button" onClick={() => handleUserSelection("patient")}>
            <img className="patient-image" src={patientImage} alt="Patient"/>
          </button>
        </div>

        <p className="signin-text-container">
          Already have an account? <Link className="signin-link-text" to="/login">Sign in</Link>
        </p>
      </div>

      <Copyright />

      {showForm && (
        <div className="modal-overlay">
          <div className="signup-form">
            <button className="close-button" onClick={() => setShowForm(false)}>X</button>
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="first-input-row">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Middle Name"/>
                <input type="text" placeholder="Last Name"/>
                <select>
                  <option value="">Suffix</option>
                  <option value="Jr">Jr</option>
                  <option value="Sr">Sr</option>
                </select>
              </div>

              <input type="text" placeholder="Address" className="address-input"/>
              <input type="text" placeholder="Occupation" className="occupation-input"/>
              <input type="text" placeholder="Contact Number" className="contact-number-input"/>
              <select className="civil-status-input">
                <option value="">Civil Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>

              <label className="dob-label">Date of Birth</label>
              <input type="date" className="dob-input"/>
              <input className="age-input" type="text" placeholder="Age"/>

              <h2 className="login-credentials-text">Login Credentials</h2>
              <input className="signup-email-input" type="text" placeholder="Email"/>
              <input className="signup-password-input" type="password" placeholder="Password"/>
              <input className="signup-confirm-password-input" type="password" placeholder="Confirm Password"/>

              <button type="submit" className="submit-btn">➝</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
