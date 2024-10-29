import React from "react";
import  "../assets/styles/Hero.css";
import logo from "../GoUp_logo.svg";


const Hero = () => {
    return (
        <div className="hero-section">
            <img src={logo} alt="Logo" className="logo" />

        </div>
    );
};

export default Hero;
