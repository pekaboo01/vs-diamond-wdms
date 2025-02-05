/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
File            : App.js
Description     : 
    This page will allow the project to access and routes all the pages.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: February 02, 2025
-------------------------------------------------------------------------------------
*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faqs from "./pages/faqs/Faqs";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Homepage from './pages/homepage/Homepage.js';
import ViewServices from './pages/view-services/ViewServices.js';
import ViewDentalPortfolio from './pages/view-dental-portfolio/ViewDentalPortfolio.js';
import Login from './pages/login/Login.js';
import ForgotPassword from "./pages/forgot-password/ForgotPassword.js";
import Signup from './pages/signup/Signup.js';
import HomePatient from './pages/home-patient/HomePatient.js';
import HomePersonnel from './pages/home-personnel/HomePersonnel.js'
import PatientAppointment from './pages/patient-appointment/PatientAppointment.js';
import PatientTH from './pages/patient-th/PatientTH.js';
import ChangePassword from './pages/change-password/ChangePassword.js';
import PersonnelMA from './pages/personnel-manage-appointment/PersonnelMA.js';
import PersonnelPatientRecord from './pages/personnel-patient-record/PersonnelPatientRecord.js'
import PersonnelRevenueReport from './pages/personnel-revenue-report/personnelRevenueReport.js'
import PersonnelManageInventory from './pages/personnel-manage-inventory/PersonnelManageInventory.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/faqs" element={<Faqs />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/view-services" element={<ViewServices />}/>
          <Route path="/view-dental-portfolio" element={<ViewDentalPortfolio />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/home-patient" element={<HomePatient />}/>
          <Route path="/home-personnel" element={<HomePersonnel />}/>
          <Route path="/patient-appointment" element={<PatientAppointment />}/>
          <Route path="/patient-th" element={<PatientTH />}/>
          <Route path="/change-password" element={<ChangePassword />}/>
          <Route path="/personnel-manage-appointment" element={<PersonnelMA />}/>
          <Route path="/personnel-patient-record" element={<PersonnelPatientRecord />}/>
          <Route path="/personnel-revenue-report" element={<PersonnelRevenueReport />}/>
          <Route path="/personnel-manage-inventory" element={<PersonnelManageInventory />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;