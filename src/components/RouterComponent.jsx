import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Services from "./Services";
import Info from "./info";
import Contact from "./contact";
import NavbarComponent from "./Navbar";
const RouterComponent = () => {
  return (
    <div className="containers">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/random" element={<h1>Random Component</h1>} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
        <footer className="d-flex justify-content-center py-3 bg-dark text-white">&copy; copyright: All rights are reserved</footer>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
