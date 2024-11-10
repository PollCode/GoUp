import React, { useState, useEffect } from "react";
import redStar from "../assets/images/redStar.png";
import spaceShip from "../assets/images/spaceship.png";
import "../assets/styles/WhyUs.css";

const WhyUsCard = (props) => {
  return (
    <div className="d-flex flex-column align-items-center p-2">
      <img src={redStar} alt="Red Star" className="my-4" id="redStar"></img>
      <h2 className="card-title">{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

const WhyUs = () => {
  const [small, setSmall] = useState(false);

  const handleResize = () => {
    setSmall(window.innerWidth <= 1000);
    console.log(window.innerWidth);
    //console.log(small);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {small ? (
        <div id="carouselExample" class="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active p-2">
            <WhyUsCard title=" Why Go up PPEC?" text="At Go Up Pediatric Extended Care, we provide the highest level of support, care, and developmental guidance for your child. 
                Our mission is to create a nurturing environment where every child can thrive, with compassionate care tailored to their unique needs." />
            </div>
            <div className="carousel-item p-2">
            <WhyUsCard title="Welcome to Go Up Pediatric Extended Care (PPEC) of Miami" text="We believe in creating a place where children feel happy, safe and cared for. Our specialized Pediatric Extended Care (PPEC) services are designed to support children with special needs with compassion and skill, 
                providing peace of mind to families in Miami. Every day, we work to make children's lives a little easier by focusing on their health, happiness and development." />
            </div>
            <div className="carousel-item p-2">
            <WhyUsCard title="Our Mission" text="Our mission at Go Up is simple: to make children happy and their lives, as well as their families, a little easier. We are dedicated to providing comprehensive, 
                personalized care in a safe and engaging environment so that every child can go up and reach their full potential.." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="d-flex flex-row justify-content-center align-items-center mt-5 mb-3 why-us-header">
            <img src={spaceShip} alt="Space Ship" id="spaceShip"></img>
            <p>WHY US?</p>
          </div>
          <div className="why-us-wrapper row p-5">
            <div className="col-4 d-flex align-items-center">
              <WhyUsCard title=" Why Go up PPEC?" text="At Go Up Pediatric Extended Care, we provide the highest level of support, care, and developmental guidance for your child. 
                Our mission is to create a nurturing environment where every child can thrive, with compassionate care tailored to their unique needs." />
            </div>
            <div className="col-4 d-flex align-items-center">
              <WhyUsCard title="Welcome to Go Up Pediatric Extended Care (PPEC) of Miami" text="We believe in creating a place where children feel happy, safe and cared for. Our specialized Pediatric Extended Care (PPEC) services are designed to support children with special needs with compassion and skill, 
                providing peace of mind to families in Miami. Every day, we work to make children's lives a little easier by focusing on their health, happiness and development." />
            </div>
            <div className="col-4 d-flex align-items-center">
              <WhyUsCard title="Our Mission" text="Our mission at Go Up is simple: to make children happy and their lives, as well as their families, a little easier. We are dedicated to providing comprehensive, 
                personalized care in a safe and engaging environment so that every child can go up and reach their full potential.." />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhyUs;
