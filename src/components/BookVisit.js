import React, { useEffect, useState } from "react";
import starRainbow from "../assets/images/star-rainbow.png";
import rectangle from "../assets/images/rectangle.png";
import "../assets/styles/BookVisit.css";

const BookVisit = () => {
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
    <div className="row mx-0 mb-5 pb-5">
      <div className="col-lg-8 p-5 col-sm -12">
        <div className={`${small ? "portrait-small" : "portrait"}`}>
          <img 
            src={rectangle} 
            alt="Book Visit" 
            className={`${small ? "main-img-small" : "main-img"}`} />
          <img
            src={starRainbow}
            alt="Star Rainbow"
            className={`${small ?  "second-img-small" :  "second-img"}`}/>
        </div>
      </div>
      <div className="col-lg-4 col-sm -12 d-flex flex-column justify-content-center align-items-center">
        <p className={`${small ?  "book-text-small" :  "book-text"}`}>BOOK YOUR VISIT</p>
        <button className="btn btn-success btn-call-us rounded-pill mb-3">
          CALL US
        </button>
        <button className="btn btn-primary btn-email-us rounded-pill">
          EMAIL US
        </button>
      </div>
    </div>
  );
};

export default BookVisit;
