import React, { useEffect, useState } from "react";
import starRainbow from "../assets/images/star-rainbow.png";
import rectangle from "../assets/images/rectangle.png";
import "../assets/styles/BookVisit.css";
import { useLanguage } from '../languageContext'; // Importa el contexto

const BookVisit = () => {
  const [small, setSmall] = useState(false);
  const { isSpanish } = useLanguage(); // Usa el contexto para obtener el idioma

  const handleResize = () => {
    setSmall(window.innerWidth <= 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="row mx-0 mb-5 pb-5">
      <div className="col-lg-8 p-5 col-sm-12">
        <div className={`${small ? "portrait-small" : "portrait"}`}>
          <img 
            src={rectangle} 
            alt={isSpanish ? "Reservar Visita" : "Book Visit"} 
            className={`${small ? "main-img-small" : "main-img"}`} />
          <img
            src={starRainbow}
            alt={isSpanish ? "Estrella Arcoíris" : "Star Rainbow"}
            className={`${small ? "second-img-small" : "second-img"}`}/>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <p className={`${small ? "book-text-small" : "book-text"}`}>
          {isSpanish ? "RESERVA TU VISITA" : "BOOK YOUR VISIT"}
        </p>
        <button className="btn btn-success btn-call-us rounded-pill mb-3">
          {isSpanish ? "LLÁMANOS" : "CALL US"}
        </button>
        <button className="btn btn-primary btn-email-us rounded-pill">
          {isSpanish ? "ENVÍANOS UN EMAIL" : "EMAIL US"}
        </button>
      </div>
    </div>
  );
};

export default BookVisit;
