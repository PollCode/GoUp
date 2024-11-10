import React, { useState, useEffect } from "react";
import "../assets/styles/WhatWeDo.css";

const WhatWeDo = () => {
  const [small, setSmall] = useState(window.innerWidth <= 1000);

  const handleResize = () => {
    setSmall(window.innerWidth <= 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${small ? "what-we-do-small" : "what-we-do mt-5 pb-4"}`}>
      <div className={`${small ? "" : "wwd-box p-2"}`}>
        <p className={`text-center ${small ? "wwd-title-small" : "wwd-title"}`}>
          WHO WE ARE
        </p>
        <div className={`text-box ${small ? "p-3" : ""}`} style={{ maxHeight: '270px', overflowY: 'auto' }}>
          <p className={`text-${small ? "center" : "left"} ${small ? "wwd-text-small" : "wwd-text"}`}>
            Go Up Pediatric Extended Care (PPEC) in Miami was founded to provide compassionate, specialized care for children with complex health needs. Our team consists of professional nurses and aides with extensive experience in pediatric care. We work closely with families to develop care plans tailored to each child, helping them grow in a nurturing, joyful environment.
          </p>
          <p className={`text-${small ? "center" : "left"} ${small ? "wwd-text-small" : "wwd-text"}`}>
            <strong>Why Choose Go Up?</strong>
          </p>
          <ul className={`text-${small ? "center" : "left"} ${small ? "wwd-text-small" : "wwd-text"}`}>
            <li>Specialized Care: We offer a variety of pediatric extended care services focused on the unique needs of each child.</li>
            <li>State-of-the-Art Medical Equipment: Our facility is equipped with the latest medical technology to ensure each child receives the highest level of care.</li>
            <li>Experienced Professionals: Our team includes professional nurses and aides with specialized pediatric experience, providing expert care around the clock.</li>
            <li>Outdoor Area: We provide a supervised outdoor space where children can safely play or walk around, allowing them to enjoy fresh air and movement.</li>
            <li>Complementary Walks: Our team regularly organizes supervised walks outside the center, offering children a change of scenery and an opportunity to explore.</li>
          </ul>
          <p className={`text-${small ? "center" : "left"} ${small ? "wwd-text-small" : "wwd-text"}`}>
            Choosing the right PPEC in Miami means finding a place that feels like home for you and your child. At Go Up, we are committed to delivering not only exceptional care but also emotional support, helping your family feel confident and secure every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;


