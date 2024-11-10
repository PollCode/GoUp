import React, {useEffect, useState} from "react";
import rocket from "../assets/images/rocketShip.png";
import "../assets/styles/Faq.css";

const Faq = () => {
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
    <div className="faq row">
      {!small && (
        <div className="col-lg-5 rocketContainer">
          <img
            src={rocket}
            className="me-auto"
            alt="Rocket"
            id="rocketShip"/>
        </div>
      )}
      
      <div className="col-lg-7  faq-box d-flex flex-column p-5">
        <p
          className={`${
            small ? "faq-header-small" : "faq-header "
          } text-center  mb-5`}>
            {small ? "FAQ" : "FREQUENTLY ASKED QUESTIONS"}
        </p>
        <a
          className="btn-faqdrop d-flex justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseFaq-1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseFaq-1">
          What is a PPEC?
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_27_83)">
              <path
                d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z"
                fill="#F45137"
              />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect
                  width="22"
                  height="17"
                  fill="white"
                  transform="translate(0.386719)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-1">
          <div className="card card-body card-faq-body">
          A Prescribed Pediatric Extended Care is a facility that specializes in the care of children between the ages of 0-21 who require medical attention and monitoring of their specific condition.
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
          Who Qualifies For The PPEC Program?
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_27_83)">
              <path
                d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z"
                fill="#F45137"
              />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect
                  width="22"
                  height="17"
                  fill="white"
                  transform="translate(0.386719)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-2">
          <div className="card card-body card-faq-body">
          Medically fragile children with complex medical conditions who require skilled nursing care, and children whose needs cannot be met by a typical school or daycare and/or do not require hospitalization.
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
          How much does it cost?
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_27_83)">
              <path
                d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z"
                fill="#F45137"
              />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect
                  width="22"
                  height="17"
                  fill="white"
                  transform="translate(0.386719)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-3">
          <div className="card card-body card-faq-body">
          Services are 100% covered by Medicaid. Our staff will handle all the enrollment requirements and process for your child's admission. We also accept insurance and private payment.
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
          We're here for you, 12 hours a day, 7 days a week!
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_27_83)">
              <path
                d="M0.386719 1.00545L22.3867 0L11.2928 17L0.386719 1.00545Z"
                fill="#F45137"
              />
            </g>
            <defs>
              <clipPath id="clip0_27_83">
                <rect
                  width="22"
                  height="17"
                  fill="white"
                  transform="translate(0.386719)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <hr className="faq-hr" />
        <div className="collapse" id="collapseFaq-4">
          <div className="card card-body card-faq-body">
          You can go to work, school, or care for family, knowing we've got you covered.
          </div>
          <hr className="faq-hr" />
        </div>
      </div>

      {small && (
        <div className="col-lg-5 rocketContainer">
          <img
            src={rocket}
            className="me-auto "
            alt="Rocket"
            id="rocketShip-small"/>
        </div>
      )}
    </div>
  );
};

export default Faq;
