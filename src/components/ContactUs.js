import React from "react";
import "../assets/styles/ContactUs.css";
import goupLogo from "../assets/images/go_up_logo.png";

const ContactUs = () => {
  return (
    <>
      <div id="contact"></div>
      <div className="contact-box row mt-5">
        <div className="col-lg-6 col-sm-12 px-5 d-flex flex-column justify-content-center align-items-start">
          <p className="contactus-header">CONTACT US</p>
          <p className="txt-help">WELCOME</p>
          <p className="contactus-text">
          By choosing Go Up, you’re selecting a team dedicated to promoting your child’s well-being and growth through specialized pediatric care and therapies. Reach out today to learn more about our services or schedule a visit—we’re here to answer all your questions and help make life a little easier for you and your family.
          </p>
          <p className="txt-help">Get in Touch</p>
          <p className="contactus-text">Please fill out the form below, and our team will get back to you shortly. Let’s start this journey together!</p>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <form class="row g-2">
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Name"
                id="inputName"
              />
            </div>

            <div className="col-12">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="Email"
                id="inputEmail"
              />
            </div>

            <div className="col-12">
              <input
                type="tel"
                className="form-control rounded-pill"
                placeholder="Phone"
                id="inputPhone"
              />
            </div>

            <div className="col-12">
              <input
                type="old"
                className="form-control rounded-pill"
                placeholder="How old is your child"
                id="inputPhone"
              />
            </div>

            <div className="col-12">
              <select id="selectServ" className="form-select rounded-pill">
                <option selected>Services</option>
                <option>Therapy Services</option>
                <option>Rehabilitation Therapy</option>
                <option>Oxygen Ventilator Therapy</option>
                <option>Apnea Care</option>
                <option>Tracheostomy Care</option>
                <option>Cardiac Monitoring</option>
                <option>GT/NT Tube Feeding</option>
                <option>Specialty Clinic Support</option>
                <option>Follow-Up with Primary Doctor and Specialists</option>
                <option>Nutrition</option>
                <option>Free Transportation</option>
              </select>
            </div>

            <div className="col-12">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="inputMessage"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  class="btn btn-danger btn-mssg rounded-pill">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_27_126)">
                      <path
                        d="M17.3715 26.0001C17.1507 25.886 17.0244 25.7002 16.9272 25.4738C15.3187 21.7374 13.7048 18.0027 12.098 14.2654C12.0212 14.0876 11.9196 13.985 11.7394 13.916C8.01526 12.4883 4.29379 11.0545 0.570539 9.62678C0.324973 9.53214 0.112973 9.41626 -0.000976562 9.16681V8.86164C0.110323 8.62369 0.306423 8.50073 0.550223 8.41758C8.73871 5.62678 16.9246 2.83156 25.1139 0.0469517C25.2968 -0.0149678 25.5379 -0.0176215 25.7181 0.0469517C25.992 0.146023 26.0617 0.454736 25.9478 0.814754C25.5521 2.06376 25.1519 3.31276 24.7553 4.56177C22.5478 11.5083 20.3395 18.4539 18.1356 25.4012C18.0526 25.6631 17.9395 25.8842 17.6763 25.9983H17.3715V26.0001ZM24.1741 2.65819C24.1617 2.65288 24.1484 2.64757 24.1361 2.64138C24.099 2.67588 24.0619 2.70861 24.0257 2.74487C20.4287 6.34593 16.8327 9.947 13.2313 13.5436C13.1041 13.671 13.1059 13.7657 13.1713 13.9169C14.559 17.1226 15.9414 20.33 17.3256 23.5374C17.3583 23.6135 17.3971 23.6869 17.4528 23.8028C19.7017 16.7254 21.9375 9.69224 24.1732 2.65819H24.1741ZM2.25064 9.03766C2.35664 9.0872 2.422 9.12347 2.4909 9.15C5.67708 10.3769 8.86415 11.6002 12.0477 12.8324C12.2305 12.9032 12.3312 12.8616 12.4611 12.7316C15.9944 9.18627 19.5322 5.64536 23.069 2.10356C23.1273 2.04518 23.183 1.98326 23.2395 1.92311C23.2324 1.90984 23.2254 1.89569 23.2174 1.88242C16.2426 4.2619 9.26695 6.64226 2.25064 9.03766Z"
                        fill="#FBEDD3"
                      />
                      <path
                        d="M-9.32303e-05 25.2881C0.127107 25.1325 0.241056 24.9644 0.38239 24.8229C2.8937 22.3036 5.40767 19.7862 7.92251 17.2705C8.01173 17.1811 8.10625 17.0918 8.21225 17.0263C8.4322 16.8901 8.71133 16.937 8.88623 17.121C9.05671 17.3005 9.09293 17.5641 8.96308 17.7782C8.90655 17.8711 8.83235 17.9551 8.75461 18.0321C6.20002 20.592 3.64454 23.151 1.08641 25.7074C0.975106 25.8189 0.836422 25.9029 0.710989 25.9993H0.45659C0.23399 25.9171 0.07764 25.7685 -0.000976562 25.542C-0.000976562 25.4571 -0.000976562 25.3722 -0.000976562 25.2881H-9.32303e-05Z"
                        fill="#FBEDD3"
                      />
                      <path
                        d="M0 19.0835C0.110417 18.9357 0.204933 18.7721 0.333016 18.6421C1.55466 17.4099 2.78338 16.183 4.00856 14.9543C4.17463 14.788 4.34953 14.6518 4.60746 14.6951C5.00408 14.7606 5.20548 15.1825 4.99789 15.5257C4.94578 15.6116 4.87688 15.6885 4.80621 15.7602C3.56866 17.0012 2.33111 18.2414 1.0918 19.4806C0.659849 19.9132 0.298566 19.8645 0.000883332 19.3373V19.0835H0Z"
                        fill="#FBEDD3"
                      />
                      <path
                        d="M6.65411 26.0002C6.12853 25.7047 6.07994 25.3403 6.51101 24.9077C7.74856 23.6667 8.98699 22.4265 10.2272 21.1882C10.304 21.1112 10.3897 21.0369 10.4825 20.982C10.6927 20.8582 10.9648 20.9016 11.1388 21.0732C11.3057 21.2386 11.3543 21.5234 11.2342 21.7277C11.175 21.8286 11.0946 21.9197 11.0116 22.0028C9.78022 23.2386 8.54886 24.4734 7.31219 25.7039C7.19471 25.8206 7.04366 25.902 6.90762 26.0002H6.65323H6.65411Z"
                        fill="#FBEDD3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_126">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-12 mt-5 d-flex justify-content-center align-items-center">
          <img src={goupLogo} className="mb-5" alt="Go Up" id="GoUpLogo" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
