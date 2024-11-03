import React, { useState, useEffect } from "react";
import "../assets/styles/WhatWeDo.css";

const WhatWeDo = () => {
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
    <div className={`${small ? "what-we-do-small" : "what-we-do mt-5 pb-4"}`}>
      <div className={`${small ? "" : "wwd-box p-2"}`}>
        <p
          className={`${
            small ? "text-center wwd-title-small" : "text-center wwd-title"
          }`}>
          WHAT WE DO
        </p>
        <div className={`${small ? "p-3 text-box": ""}`}>
          <p
            className={`${
              small ? "text-center wwd-text-small " : "text-left wwd-text"
            }`}>
            Largest PPEC in Miami: Our facility is the largest PPEC in Miami,
            providing a spacious and comfortable environment for children to
            play, learn, and grow. With ample room for activities, your child
            will have plenty of opportunities to socialize and develop their
            skills in a safe and nurturing environment.Largest PPEC in
            Miami: Our facility is the largest PPEC in Miami, providing a
            spacious and comfortable environment for children to play, learn,
            and grow. With ample room for activities, your child will have
            plenty of opportunities to socialize and develop their skills in a
            safe and nurturing environment.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
