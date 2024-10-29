import React from "react";
import rectangle from "../assets/images/rectangle.png";
import "../assets/styles/Services.css";
import whiteStar from "../assets/images/whiteStar.png";
import planet from "../assets/images/planet.png";

const Service = () => {
  return (
    <div className="card card-service" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center mb-3">
        <img src={whiteStar} alt="Estrella Blanca" />
      </div>
      <img src={rectangle} className="card-img-top" alt="Rectangle"></img>
      <div className="card-body">
        <p className="card-text">
          Largest PPEC in Miami: Our facility is the largest PPEC in Miami,
          providing a spacious and comfortable environment for children to play,
          learn, and grow. With ample room for activities, your child will have
          plenty of opportunities to socialize and develop their skills in a
          safe and nurturing environment.
        </p>
      </div>
    </div>
  );
};

const ServicesWrapper = () => {
  return (
    <div className="services my-5 d-flex flex-column justify-content-center">
      <p className="text-center services-header my-5">OUR SERVICES</p>
      <div className="services-wrappper row">
        <div className="col-lg-4 d-flex justify-content-end">
          <Service />
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
          <Service />
        </div>
        <div className="col-lg-4 d-flex justify-content-start">
          <Service />
        </div>

        <div className="collapse row my-5" id="collapseExample">
          <div className="col-lg-4 d-flex justify-content-end">
            <Service />
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <Service />
          </div>
          <div className="col-lg-4 d-flex justify-content-start">
            <Service />
          </div>
          
        </div>

        <a
          className="d-flex flex-column align-items-center my-3 btn-collapse"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample">
          VIEW ALL
          <svg
            width="44"
            height="35"
            viewBox="0 0 44 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_27_77)">
              <path d="M0 2.07004L44 0L21.8122 35L0 2.07004Z" fill="#F45137" />
            </g>
            <defs>
              <clipPath id="clip0_27_77">
                <rect width="44" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <img src={planet} alt="Planet Red" id="planetRed"></img>
    </div>
  );
};

export default ServicesWrapper;
