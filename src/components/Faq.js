import React, { useEffect, useState } from "react";
import rocket from "../assets/images/rocketShip.png";
import "../assets/styles/Faq.css";
import { useLanguage } from '../languageContext'; // Asegúrate de que la ruta sea correcta

const Faq = () => {
  const { isSpanish } = useLanguage(); // Obtén isSpanish del contexto
  const [small, setSmall] = useState(false);

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
    <div className="faq row">
      {!small && (
        <div className="col-lg-5 rocketContainer">
          <img src={rocket} className="me-auto" alt="Rocket" id="rocketShip" />
        </div>
      )}
      
      <div className="col-lg-7 faq-box d-flex flex-column p-5">
        <p className={`${small ? "faq-header-small" : "faq-header"} text-center mb-5`}>
          {small ? "FAQ" : (isSpanish ? "PREGUNTAS FRECUENTES" : "FREQUENTLY ASKED QUESTIONS")}
        </p>
        
        <a
          className="btn-faqdrop d-flex justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseFaq-1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseFaq-1">
          {isSpanish ? "¿Qué es un PPEC?" : "What is a PPEC?"}
          <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_27_83)">
              <path d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z" fill="#F45137" />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect width="22" height="17" fill="white" transform="translate(0.386719)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-1">
          <div className="card card-body card-faq-body">
            {isSpanish 
              ? "Un Cuidado Pediátrico Ampliado Prescrito es una instalación que se especializa en el cuidado de niños entre las edades de 0-21 que requieren atención médica y monitoreo de su condición específica."
              : "A Prescribed Pediatric Extended Care is a facility that specializes in the care of children between the ages of 0-21 who require medical attention and monitoring of their specific condition."
            }
          </div>
          <hr className="faq-hr" />
        </div>

        <a
          className="btn-faqdrop d-flex justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseFaq-2"
          role="button"
          aria-expanded="false"
          aria-controls="collapseFaq-2">
          {isSpanish ? "¿Quién califica para el programa PPEC?" : "Who Qualifies For The PPEC Program?"}
          <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_27_83)">
              <path d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z" fill="#F45137" />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect width="22" height="17" fill="white" transform="translate(0.386719)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-2">
          <div className="card card-body card-faq-body">
            {isSpanish 
              ? "Los niños médicamente frágiles con condiciones médicas complejas que requieren atención de enfermería especializada, y los niños cuyas necesidades no pueden ser atendidas por una escuela o guardería típica y/o no requieren hospitalización."
              : "Medically fragile children with complex medical conditions who require skilled nursing care, and children whose needs cannot be met by a typical school or daycare and/or do not require hospitalization."
            }
          </div>
          <hr className="faq-hr" />
        </div>

        <a
          className="btn-faqdrop d-flex justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseFaq-3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseFaq-3">
          {isSpanish ? "¿Cuánto cuesta?" : "How much does it cost?"}
          <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_27_83)">
              <path d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z" fill="#F45137" />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect width="22" height="17" fill="white" transform="translate(0.386719)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-3">
          <div className="card card-body card-faq-body">
            {isSpanish 
              ? "Los servicios están cubiertos al 100% por Medicaid. Nuestro personal se encargará de todos los requisitos de inscripción y el proceso para la admisión de su hijo. También aceptamos seguros y pagos privados."
              : "Services are 100% covered by Medicaid. Our staff will handle all the enrollment requirements and process for your child's admission. We also accept insurance and private payment."
            }
          </div>
          <hr className="faq-hr" />
        </div>

        <a
          className="btn-faqdrop d-flex justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseFaq-4"
          role="button"
          aria-expanded="false"
          aria-controls="collapseFaq-4">
          {isSpanish ? "¡Estamos aquí para usted, 12 horas al día, 7 días a la semana!" : "We're here for you, 12 hours a day, 7 days a week!"}
          <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_27_83)">
              <path d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z" fill="#F45137" />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect width="22" height="17" fill="white" transform="translate(0.386719)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-4">
          <div className="card card-body card-faq-body">
            {isSpanish 
              ? "Estamos aquí para ayudarle en cualquier momento con sus necesidades de atención médica."
              : "We are here to assist you at any time with your healthcare needs."
            }
          </div>
          <hr className="faq-hr" />
        </div>
      </div>
    </div>
  );
};

export default Faq;


