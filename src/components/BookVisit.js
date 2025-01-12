import React, { useEffect } from "react";
import planet from "../assets/images/planeta 1.png";
import niña from "../assets/images/niña 1.png";
import rectangle from "../assets/images/RectangleBlack.png";
import "../assets/styles/BookVisit.css";
import { useLanguage } from "../languageContext";
import { useMediaQuery } from "react-responsive";

const BookVisit = () => {
  const small = useMediaQuery({ query: "(max-width: 768px)" });
  const { isSpanish } = useLanguage();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="row pb-5 book-visit mx-0">
        <div className="col-lg-8 p-5 col-sm-12">
          <div className={`${small ? "portrait-small" : "portrait"}`}>
            <img
              src={rectangle}
              alt={isSpanish ? "Reservar Visita" : "Book Visit"}
              className={`${small ? "main-img-small" : "main-img"}`}
            />
            {!small && (
              <img
                src={planet}
                alt={isSpanish ? "Estrella Arcoíris" : "Star Rainbow"}
                className={`${small ? "second-img-small" : "second-img"}`}
              />
            )}
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <div className="botonera">
            <p
              className={`${
                small ? "book-text-small text-center" : "book-text"
              }`}>
              {isSpanish ? "RESERVA TU VISITA" : "BOOK YOUR VISIT"}
            </p>
            <a 
              href="tel:+5358414059" 
              className="btn btn-success btn-call-us rounded-pill mb-3 d-flex justify-content-center align-items-center"
            >
              <span className="text-center">{isSpanish ? "LLÁMANOS" : "CALL US"}</span>
            </a>
            <a 
              href="mailto:rauljavierdominguezmaymir@gmail.com?subject=Consulta%20desde%20la%20web" 
              className="btn btn-primary btn-email-us rounded-pill d-flex justify-content-center align-items-center"
            >
              <span className="text-center">{isSpanish ? "ENVÍANOS UN EMAIL" : "EMAIL US"}</span>
            </a>
            <img
              src={niña}
              className={`${small ? "niña-img-small" : "niña-img"}`}
              alt="niña"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookVisit;

