import React from "react";
import planet from "../assets/images/planeta 1.png";
import niña from "../assets/images/niña 1.png";
import "../assets/styles/BookVisit.css";
import { useLanguage } from "../languageContext";
import { useMediaQuery } from "react-responsive";

const BookVisit = () => {
  const small = useMediaQuery({ query: "(max-width: 768px)" });
  const { isSpanish } = useLanguage();

  return (
    <>
      <div className={`row ${small? "book-visit-sm":"book-visit pb-5"}`}>
        <div className="col-lg-8 col-sm-3">
          <div className={`${small ? "portrait-small" : "portrait"}`}>
            {!small && (
              <>
                <img src={planet} alt="planet" className="planet" />
                <img src={niña} alt="niña" className="niña" />
              </>
            )}
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="botonera d-flex flex-column justify-content-center align-items-center">
            <p
              className={`${
                small ? "book-text-small text-center" : "book-text"
              }`}>
              {isSpanish ? "RESERVA TU VISITA" : "BOOK YOUR VISIT"}
            </p>
            <a
              href="tel:+5358414059"
              className={`btn btn-success ${
                small ? "btn-call-us-small" : "btn-call-us"
              } rounded-pill mb-3 d-flex justify-content-center align-items-center`}>
              <span className="text-center">
                {isSpanish ? "LLÁMANOS" : "CALL US"}
              </span>
            </a>
            <a
              href="mailto:rauljavierdominguezmaymir@gmail.com?subject=Consulta%20desde%20la%20web"
              className={`btn btn-primary ${
                small ? "btn-email-us-small" : "btn-email-us"
              } rounded-pill mb-3 d-flex justify-content-center align-items-center`}>
              <span className="text-center">
                {isSpanish ? "ENVÍANOS UN EMAIL" : "EMAIL US"}
              </span>
            </a>
            {small && (
              <>
                <img src={niña} alt="niña" className="niña-sm" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookVisit;
