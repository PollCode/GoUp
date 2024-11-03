import React, { useState, useEffect } from "react";
import circle from "../assets/images/circle.png";
import "../assets/styles/Team.css";

const TeamCard = (props) => {
  return (
    <div className="card card-team d-flex flex-column align-items-center" style={{ width: props.small ? "100%" : "18rem" }}>
      <img src={circle} className="card-img-top team-photo " alt="Circle"></img>
      <div className="card-body">
        <p className="card-text text-center">
          Largest PPEC in Miami: Our facility is the largest PPEC in Miami,
          providing a spacious and comfort environment.
        </p>
      </div>
    </div>
  );
};

const TeamWrapper = () => {
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
        <>
        <div id="team-s"></div>
        <div id="carouselExample3" class="carousel slide teamWrapper-small">
          <p className="text-center team-header-small my-5">TEAM</p>
          <div className="carousel-inner">
            <div className="carousel-item active p-2">
              <TeamCard small="small"/>
            </div>
            <div className="carousel-item p-2">
              <TeamCard small="small"/>
            </div>
            <div className="carousel-item p-2">
              <TeamCard small="small"/>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample3"
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
        </>
      ) : (
        <>
          <div id="team"></div>
          <div className="teamWrapper my-5 px-5 d-flex flex-column justify-content-center">
            <p className="text-center team-header my-5">TEAM</p>
            <div className="team-wrappper row">
              <div className="col-lg-3 d-flex justify-content-center">
                <TeamCard />
              </div>
              <div className="col-lg-3 d-flex justify-content-center">
                <TeamCard />
              </div>
              <div className="col-lg-3 d-flex justify-content-center">
                <TeamCard />
              </div>
              <div className="col-lg-3 d-flex justify-content-center">
                <TeamCard />
              </div>

              <div className="collapse row my-5" id="collapseTeam">
                <div className="col-lg-3 d-flex justify-content-center">
                  <TeamCard />
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <TeamCard />
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <TeamCard />
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <TeamCard />
                </div>
              </div>

              <a
                className="d-flex flex-column align-items-center my-3 btn-collapse"
                data-bs-toggle="collapse"
                href="#collapseTeam"
                role="button"
                aria-expanded="false"
                aria-controls="collapseTeam">
                VIEW ALL
                <svg
                  width="44"
                  height="35"
                  viewBox="0 0 44 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_27_177)">
                    <path
                      d="M0 2.07004L44 0L21.8122 35L0 2.07004Z"
                      fill="#7575C1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_27_177">
                      <rect width="44" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TeamWrapper;
