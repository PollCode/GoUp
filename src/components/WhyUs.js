import React from "react";
import redStar from "../assets/images/redStar.png";
import spaceShip from "../assets/images/spaceship.png";
import "../assets/styles/WhyUs.css";

const WhyUsCard = (props) => {
  return (
    <div className="d-flex flex-column align-items-center p-2">
      <img src={redStar} alt="Red Star" className="my-4" id="redStar"></img>
      <p>{props.text}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row justify-content-center align-items-center mt-5 mb-3 why-us-header">
        <img src={spaceShip} alt="Space Ship" id="spaceShip"></img>
        <p>WHY US?</p>
      </div>
      <div className="why-us-wrapper row p-5">
        <div class="col-4 d-flex align-items-center">
          <WhyUsCard text="Largest PPEC in Miami: Our facility is the largest PPEC in Miami, providing a spacious and comfortable environment for children to play, learn, and grow. With ample room for activities, your child will have plenty of opportunities to socialize and develop their skills in a safe and nurturing environment." />
        </div>
        <div class="col-4 d-flex align-items-center">
          <WhyUsCard text="Largest PPEC in Miami: Our facility is the largest PPEC in Miami, providing a spacious and comfortable environment for children to play, learn, and grow. With ample room for activities, your child will have plenty of opportunities to socialize and develop their skills in a safe and nurturing environment." />
        </div>
        <div class="col-4 d-flex align-items-center">
          <WhyUsCard text="Largest PPEC in Miami: Our facility is the largest PPEC in Miami, providing a spacious and comfortable environment for children to play, learn, and grow. With ample room for activities, your child will have plenty of opportunities to socialize and develop their skills in a safe and nurturing environment." />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
