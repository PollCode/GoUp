import React from "react";
import { useMediaQuery } from "react-responsive";
//import img from "../assets/images/wwdImg.png";
import "../assets/styles/WhatWeDo.css";
import { useLanguage } from "../languageContext"; // Importa el contexto

const WhatWeDo = () => {
  const small = useMediaQuery({ query: "(max-width: 768px)" });
  const { isSpanish } = useLanguage(); // Usa el contexto para obtener el idioma

  return (
    <>
      <div className="row">
        <div
          className={`col-lg-6 col-md-6 col-sm-12 ${
            small ? "img-container-small" : "img-container"
          }`}></div>
        <div className="col-lg-6 col-md-6 col-sm-12 p-4">
          <div className="title-box">
            <p
              className={`text-${
                small ? "center wwd-title-small" : "left wwd-title"
              }`}>
              {isSpanish ? "QUÉ HACEMOS" : "WHAT WE DO"}
            </p>
          </div>
          <div className="content-box">
            <p className={`text-${small ? "center" : "left"}`}>
              {isSpanish
                ? "Go Up Pediatric Extended Care (PPEC) en Miami fue fundado para proporcionar atención especializada y compasiva para niños con necesidades de salud complejas. Nuestro equipo está formado por enfermeras y auxiliares profesionales con amplia experiencia en el cuidado pediátrico. Trabajamos estrechamente con las familias para desarrollar planes de atención adaptados a cada niño, ayudándoles a crecer en un entorno nutritivo y alegre."
                : "Go Up Pediatric Extended Care (PPEC) in Miami was founded to provide compassionate, specialized care for children with complex health needs. Our team consists of professional nurses and aides with extensive experience in pediatric care. We work closely with families to develop care plans tailored to each child, helping them grow in a nurturing, joyful environment."}
            </p>
            <p
              className={`text-${
                small ? "center wwd-title-small-2" : "left wwd-title-2"
              }`}>
              <strong>
                {isSpanish ? "¿Por qué elegir Go Up?" : "Why Choose Go Up?"}
              </strong>
            </p>
            <ul className={`text-right`}>
              <li>
                {isSpanish
                  ? "Atención especializada: Ofrecemos una variedad de servicios de atención pediátrica extendida centrados en las necesidades únicas de cada niño."
                  : "Specialized Care: We offer a variety of pediatric extended care services focused on the unique needs of each child."}
              </li>
              <li>
                {isSpanish
                  ? "Equipos médicos de última generación: Nuestras instalaciones están equipadas con la última tecnología médica para garantizar que cada niño reciba el más alto nivel de atención."
                  : "State-of-the-Art Medical Equipment: Our facility is equipped with the latest medical technology to ensure each child receives the highest level of care."}
              </li>
              <li>
                {isSpanish
                  ? "Profesionales experimentados: Nuestro equipo incluye enfermeras y auxiliares profesionales con experiencia pediátrica especializada, proporcionando atención experta las 24 horas."
                  : "Experienced Professionals: Our team includes professional nurses and aides with specialized pediatric experience, providing expert care around the clock."}
              </li>
              <li>
                {isSpanish
                  ? "Área al aire libre: Proporcionamos un espacio exterior supervisado donde los niños pueden jugar o caminar de forma segura, permitiéndoles disfrutar del aire fresco y el movimiento."
                  : "Outdoor Area: We provide a supervised outdoor space where children can safely play or walk around, allowing them to enjoy fresh air and movement."}
              </li>
              <li>
                {isSpanish
                  ? "Caminatas complementarias: Nuestro equipo organiza regularmente caminatas supervisadas fuera del centro, ofreciendo a los niños un cambio de escenario y una oportunidad para explorar."
                  : "Complementary Walks: Our team regularly organizes supervised walks outside the center, offering children a change of scenery and an opportunity to explore."}
              </li>
            </ul>
            <p className={`text-${small ? "center" : "left"}`}>
              {isSpanish
                ? "Elegir el PPEC adecuado en Miami significa encontrar un lugar que se sienta como en casa para usted y su hijo. En Go Up, estamos comprometidos a ofrecer no solo atención excepcional, sino también apoyo emocional, ayudando a su familia a sentirse segura y confiada en cada paso del camino."
                : "Choosing the right PPEC in Miami means finding a place that feels like home for you and your child. At Go Up, we are committed to delivering not only exceptional care but also emotional support, helping your family feel confident and secure every step of the way."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
