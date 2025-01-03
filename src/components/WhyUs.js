import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import redStar from "../assets/images/redStar.png";
import "../assets/styles/WhyUs.css";
import { useLanguage } from "../languageContext"; // Importa el contexto

const WhyUsCard = (props) => {
  return (
    <div className="card d-flex flex-column align-items-center p-2 mb-3">
      <img src={redStar} alt="Red Star" className="my-4" id="redStar"></img>
      <h2 className="card-title">{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

const WhyUs = () => {
  const small = useMediaQuery({ query: "(max-width: 768px)" });
  const { isSpanish } = useLanguage(); // Usa el contexto para obtener el idioma


  useEffect(() => {
    //window.addEventListener("resize", handleResize);
    //window.addEventListener("DOMContentLoaded", handleResize);
    return () => {
      //window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContent = [
    {
      title: isSpanish ? "¿Por qué Go Up PPEC?" : "Why Go Up PPEC?",
      text: isSpanish
        ? "En Go Up Pediatric Extended Care, proporcionamos el más alto nivel de apoyo, cuidado y orientación en el desarrollo para su hijo. Nuestra misión es crear un entorno acogedor donde cada niño pueda prosperar, con un cuidado compasivo adaptado a sus necesidades únicas."
        : "At Go Up Pediatric Extended Care, we provide the highest level of support, care, and developmental guidance for your child. Our mission is to create a nurturing environment where every child can thrive, with compassionate care tailored to their unique needs.",
    },
    {
      title: isSpanish
        ? "Bienvenido a Go Up Pediatric Extended Care (PPEC) de Miami"
        : "Welcome to Go Up Pediatric Extended Care (PPEC) of Miami",
      text: isSpanish
        ? "Creemos en crear un lugar donde los niños se sientan felices, seguros y cuidados. Nuestros servicios especializados de Cuidado Pediátrico Extendido (PPEC) están diseñados para apoyar a los niños con necesidades especiales con compasión y habilidad, brindando tranquilidad a las familias en Miami. Todos los días, trabajamos para hacer que la vida de los niños sea un poco más fácil al enfocarnos en su salud, felicidad y desarrollo."
        : "We believe in creating a place where children feel happy, safe and cared for. Our specialized Pediatric Extended Care (PPEC) services are designed to support children with special needs with compassion and skill, providing peace of mind to families in Miami. Every day, we work to make children's lives a little easier by focusing on their health, happiness and development.",
    },
    {
      title: isSpanish ? "Nuestra Misión" : "Our Mission",
      text: isSpanish
        ? "Nuestra misión en Go Up es simple: hacer felices a los niños y hacer que sus vidas, así como las de sus familias, sean un poco más fáciles. Estamos dedicados a proporcionar atención integral y personalizada en un entorno seguro y atractivo para que cada niño pueda crecer y alcanzar su máximo potencial."
        : "Our mission at Go Up is simple: to make children happy and their lives, as well as their families, a little easier. We are dedicated to providing comprehensive, personalized care in a safe and engaging environment so that every child can go up and reach their full potential.",
    },
  ];

  return (
    <>
      {small ? (
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-indicators">
            {cardContent.map((_, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                key={index}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {cardContent.map((card, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""} p-2`}
                key={index}>
                <WhyUsCard title={card.title} text={card.text} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">
              {isSpanish ? "Anterior" : "Previous"}
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">
              {isSpanish ? "Siguiente" : "Next"}
            </span>
          </button>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="d-flex flex-row justify-content-center align-items-center mt-5 mb-3 why-us-header">
            <p>{isSpanish ? "¿POR QUÉ NOSOTROS?" : "WHY US?"}</p>
          </div>
          <div className="why-us-wrapper row p-5">
            {cardContent.map((card, index) => (
              <div className="col-4 d-flex align-items-start" key={index}>
                <WhyUsCard title={card.title} text={card.text} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WhyUs;
