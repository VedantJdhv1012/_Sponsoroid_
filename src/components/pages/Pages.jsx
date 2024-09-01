import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Features from "../Features/Features";
import Contact from "../contact/Contact";
import Join from "../home/Join_Us/join_us";
import LoginCompany from "../logincompany/logincompany";
import LoginCreator from "../logincreator/logincreator";
import RegisterCreator from "../logincreator/registrationcreater";
import RegisterCompany from "../logincompany/registercompany";
import Team from "../team/Team";
import Profile from "../profile/profile";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/login-company" element={<LoginCompany />} />
          <Route path="/login-creator" element={<LoginCreator />} />
          <Route path="/register-creator" element={<RegisterCreator />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/creators" element={<Team />} />
          <Route path="/company" element={<Team />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
