import React, { useState } from "react";
import "../assets/styles/ContactUs.css";
import goupLogo from "../assets/images/go_up_logo.png";
import emailjs from "@emailjs/browser"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
    service: "Services",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";

    switch (name) {
      case "name":
        if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
          error = "El nombre debe comenzar con mayúscula y solo contener letras.";
        }
        break;
      case "phone":
        if (!/^\d{0,12}$/.test(value)) {
          error = "El teléfono solo puede contener números y hasta 12 dígitos.";
        }
        break;
      case "age":
        if (!/^(1[0-9]|2[0-1]|[1-9])$/.test(value)) {
          error = "La edad debe ser un número entre 1 y 21.";
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const hasErrors = Object.values(errors).some((error) => error);
    
    if (hasErrors) {
      setFormError("Campos no válidos, por favor verifíquelos.");
      return;
    }

    emailjs.send("service_codv2pm","template_clpwecw", formData,"W_yqO85fndwrvO0wa")
      .then((response) => {
        console.log("Email enviado con éxito!", response.status, response.text);
        setFormError(""); 
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          message: "",
          service: "Services",
        });
      })
      .catch((err) => {
        console.error("Error al enviar el email: ", err);
        setFormError("Error al enviar el formulario, por favor inténtelo de nuevo.");
      });
  };

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
          <form className="row g-2" onSubmit={handleSubmit}>
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control rounded-pill"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>

            <div className="col-12">
              <input
                type="email"
                name="email"
                className="form-control rounded-pill"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <input
                type="tel"
                name="phone"
                className="form-control rounded-pill"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>

            <div className="col-12">
              <input
                type="number"
                name="age"
                className="form-control rounded-pill"
                placeholder="How old is your child?"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>

            <div className="col-12">
              <select
                name="service"
                id="selectServ"
                className="form-select rounded-pill"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Services</option>
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
              <div className="input-group">
                <input
                  type="text"
                  name="message"
                  className="form-control rounded-pill"
                  id="inputMessage"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="btn btn-danger btn-mssg rounded-pill"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG content */}
                  </svg>
                </button>
              </div>
            </div>

            {formError && <div className="text-danger">{formError}</div>}
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


