import React, { useEffect, useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../GoUp_logo.svg";
import servicon from "../assets/icons/service-icon.svg";
import teamicon from "../assets/icons/team-icon.svg";
import contacticon from "../assets/icons/contact-icon.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [small, setSmall] = useState(false);

  const handleScroll = () => {
    //const navbar = document.getElementById('navbar');
    //const rect = navbar.getBoundingClientRect();
    //const navbarTop = rect.top + window.scrollY; // Posición en relación al documento

    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    setSmall(window.innerWidth <= 1000);
    console.log(window.innerWidth);
    //console.log(small);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Agregar el evento resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  ${
          scrolled ? "bg-nav-scrolled fixed-top" : "bg-nav-unscrolled"
        }`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            {scrolled && <img src={logo} alt="Logo" className="navbar-logo" />}
          </a>
          {small && scrolled && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          <div
            className={`${small ? "collapse navbar-collapse" : ""} ${
              scrolled && small ? "" : "container-fluid d-flex flex-row"
            } `}
            id="navbarSupportedContent">
            <ul
              className={`navbar-nav ${
                small && !scrolled ? "d-flex flex-row justify-content-center " : ""
              } ${scrolled && small ? "ms-auto d-flex flex-column" : ""
              } ${scrolled && !small ? "mx-auto d-flex flex-row" : ""
              } ${!scrolled && !small ? "mx-auto d-flex flex-row" : ""
              }`}>
              <li className="nav-item mx-4">
                <a
                  className={`nav-link  ${
                    scrolled ? "nav-link-scrolled" : ""
                  } ${small? "nav-link-scrolled" : ""} d-flex flex-column align-items-center`}
                  href={`${small ? "#service-s": "#service"}`} >
                  <img
                    src={servicon}
                    height={`${scrolled ? "15px" : "27px"}`}
                    width={`${scrolled ? "15px" : "26px"}`}
                    alt="Service Icon"
                    className="nav-icon"
                  />
                  SERVICES
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  className={`nav-link  ${
                    scrolled ? "nav-link-scrolled" : ""
                  } ${
                    small ? "nav-link-scrolled" : ""
                  }  d-flex flex-column align-items-center`}
                  href={`${small ? "#team-s": "#team"}`}>
                  <img
                    src={teamicon}
                    height={`${scrolled ? "15px" : "27px"}`}
                    width={`${scrolled ? "15px" : "26px"}`}
                    alt="Team Icon"
                    className="nav-icon"
                  />
                  TEAM
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  className={`nav-link  ${
                    scrolled ? "nav-link-scrolled" : ""
                  } ${
                    small ? "nav-link-scrolled" : ""
                  } d-flex flex-column align-items-center`}
                  href="#contact">
                  <img
                    src={contacticon}
                    height={`${scrolled ? "15px" : "27px"}`}
                    width={`${scrolled ? "15px" : "26px"}`}
                    alt="Contact Icon"
                    className="nav-icon"
                  />
                  CONTACT
                </a>
              </li>
            </ul>
            {scrolled && (
              <div className= "d-flex flex-row align-items-center whatsapp-link">
                <a className="btn btn-success rounded-pill mx-auto" href="#whatsapp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    fill="currentColor"
                    className="bi bi-whatsapp me-2"
                    viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  {!small && "CONTACT US"}
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
