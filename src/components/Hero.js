import React from "react";
import "../assets/styles/Hero.css";
import logo from "../assets/images/GoUpLogo.png";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const small = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {small && (
        <div>
          <div className="hero-section  d-flex flex-row justify-content-center">
            <div className="logo-container container-fluid d-flex flex-row justify-content-center">
              <img src={logo} alt="Logo" className="mt-2  logo-small" />
            </div>
          </div>
        </div>
      )}
      {!small && (
        <div className="hero-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      )}
    </>
  );
};

export default Hero;
