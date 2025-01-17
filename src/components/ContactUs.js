import React, { useState } from "react";
import "../assets/styles/ContactUs.css";
import goupLogo from "../assets/images/go_up_logo.png";
import footer from "../assets/images/footer.png";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../languageContext";
import { useMediaQuery } from "react-responsive";

const ContactUs = () => {
  const small = useMediaQuery({ query: "(max-width: 768px)" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { isSpanish } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";

    switch (name) {
      case "name":
        if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ]+( [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$/.test(value)) {
          error = isSpanish
            ? "El nombre debe comenzar con mayúscula y contener solo letras."
            : "The name must begin with a capital letter and contain only letters.";
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          error = isSpanish
            ? "El teléfono solo puede contener números y hasta 10 dígitos."
            : "The phone can only contain numbers and up to 10 digits.";
        }
        break;
      case "age":
        if (!/^(1[0-7]|[1-9])$/.test(value)) {
          error = isSpanish
            ? "La edad debe ser menor de 21 años."
            : "The age must be under 21 years old.";
        }
        break;
      default:
        break;
    }

    // Establecer el error y configurar el temporizador para eliminarlo
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setFormData({ ...formData, [name]: value });

    if (error) {
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }, 10000); // 10 segundos
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setFormError("");

    let hasErrors = false;

    if (!formData.name) {
      const errorMessage = isSpanish
        ? "El nombre es obligatorio."
        : "The name is required.";
      setErrors((prevErrors) => ({ ...prevErrors, name: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
      }, 10000); // 10 segundos
    }
    if (!formData.email) {
      const errorMessage = isSpanish
        ? "El correo electrónico es obligatorio."
        : "Email is mandatory.";
      setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }, 10000); // 10 segundos
    }
    if (!formData.phone) {
      const errorMessage = isSpanish
        ? "El campo no puede estar vacío."
        : "The field cannot be empty.";
      setErrors((prevErrors) => ({ ...prevErrors, phone: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
      }, 10000); // 10 segundos
    }
    if (!formData.age) {
      const errorMessage = isSpanish
        ? "La edad es obligatoria."
        : "Age is mandatory.";
      setErrors((prevErrors) => ({ ...prevErrors, age: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
      }, 10000); // 10 segundos
    }

    if (
      !/^[A-Za-zÁÉÍÓÚÑáéíóúñ]+( [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$/.test(formData.name)
    ) {
      const errorMessage = isSpanish
        ? "El campo solo permite letras y no puede estar vacío."
        : "Field only allows letters and cannot be empty.";
      setErrors((prevErrors) => ({ ...prevErrors, name: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
      }, 10000); // 10 segundos
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      const errorMessage = isSpanish
        ? "El teléfono solo puede contener números y hasta 10 dígitos."
        : "The phone can only contain numbers and up to 10 digits.";
      setErrors((prevErrors) => ({ ...prevErrors, phone: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
      }, 10000); // 10 segundos
    }
    if (!/^(1[0-7]|[1-9])$/.test(formData.age)) {
      const errorMessage = isSpanish
        ? "La edad de niños/niñas debe ser menor de 21 años."
        : "Children's age must be under 21 years old.";
      setErrors((prevErrors) => ({ ...prevErrors, age: errorMessage }));
      hasErrors = true;

      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
      }, 10000); // 10 segundos
    }

    if (hasErrors) {
      setFormError(
        isSpanish
          ? "Campos inválidos, por favor verifica."
          : "Invalid fields, please check."
      );

      setTimeout(() => {
        setFormError("");
      }, 10000); // 10 segundos

      return;
    }

    emailjs
      .send(
        "service_7ukxmju",
        "template_o8b5k9n",
        formData,
        "5BFa0KhLP9e_D5_KQ"
      )
      .then((response) => {
        console.log("Email enviado con éxito!", response.status, response.text);
        setSuccessMessage(
          isSpanish
            ? "¡Formulario enviado con éxito!"
            : "Form submitted successfully!"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          message: "",
          service: "",
        });
        setErrors({});
      })
      .catch((err) => {
        console.error("Error al enviar el email: ", err);
        setFormError(
          isSpanish
            ? "Error al enviar el formulario, por favor intenta nuevamente."
            : "Error submitting the form, please try again."
        );
        setSuccessMessage("");
      });
  };

  return (
    <>
      <div id="contact"></div>
      <div className="contact-box row mt-5">
        <div className="col-lg-6 col-sm-12 px-5 d-flex flex-column justify-content-center align-items-start">
          {!small && <img src={goupLogo} className="ms-auto" alt="logo" />}
          <p className="contactus-header">
            {isSpanish ? "CONTÁCTANOS" : "CONTACT US"}
          </p>
          <p className="txt-help">{isSpanish ? "BIENVENIDO" : "WELCOME"}</p>
          <p className="contactus-text">
            {isSpanish
              ? "Al elegir Go Up, estás seleccionando un equipo dedicado a promover el bienestar y crecimiento de tu hijo a través de cuidados pediátricos especializados y terapias. Contáctanos hoy para saber más sobre nuestros servicios o programar una visita, estamos aquí para responder todas tus preguntas y ayudar a que la vida sea un poco más fácil para ti y tu familia."
              : "By choosing Go Up, you’re selecting a team dedicated to promoting your child’s well-being and growth through specialized pediatric care and therapies. Reach out today to learn more about our services or schedule a visit—we’re here to answer all your questions and help make life a little easier for you and your family."}
          </p>
          <p className="txt-help">
            {isSpanish ? "Ponte en contacto" : "Get in Touch"}
          </p>
          <p className="contactus-text">
            {isSpanish
              ? "Por favor, completa el formulario a continuación, y nuestro equipo se pondrá en contacto contigo pronto. ¡Comencemos este viaje juntos!"
              : "Please fill out the form below, and our team will get back to you shortly. Let’s start this journey together!"}
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <form className="row g-2" onSubmit={handleSubmit}>
            <div className="col">
              <input
                type="text"
                name="name"
                id="inputName"
                className="form-control rounded-pill"
                placeholder={isSpanish ? "Nombre" : "Name"}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>

            <div className="col-12">
              <input
                type="email"
                name="email"
                id="inputEmail"
                className="form-control rounded-pill"
                placeholder={isSpanish ? "Correo electronico" : "Email"}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <input
                type="tel"
                name="phone"
                id="inputPhone"
                className="form-control rounded-pill"
                placeholder={isSpanish ? "Telefono" : "Phone"}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <div className="text-danger">{errors.phone}</div>
              )}
            </div>

            <div className="col-12">
              <input
                type="number"
                name="age"
                id="selectAge"
                className="form-control rounded-pill"
                placeholder={
                  isSpanish
                    ? "¿Cuantos años tiene su niño?"
                    : "How old is your child?"
                }
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
                onChange={handleChange}>
                <option>{isSpanish ? "Servicios" : "Services"}</option>
                <option>
                  {isSpanish ? "Servicios de Terapia" : "Therapy Services"}
                </option>
                <option>
                  {isSpanish
                    ? "Terapia de Rehabilitación"
                    : "Rehabilitation Therapy"}
                </option>
                <option>
                  {isSpanish
                    ? "Terapia de Oxígeno y Ventilador"
                    : "Oxygen Ventilator Therapy"}
                </option>
                <option>{isSpanish ? "Cuidado de Apnea" : "Apnea Care"}</option>
                <option>
                  {isSpanish ? "Cuidado de Traqueostomía" : "Tracheostomy Care"}
                </option>
                <option>
                  {isSpanish ? "Monitoreo Cardíaco" : "Cardiac Monitoring"}
                </option>
                <option>
                  {isSpanish
                    ? "Alimentación por Sonda GT/NT"
                    : "GT/NT Tube Feeding"}
                </option>
                <option>
                  {isSpanish
                    ? "Apoyo a Clínicas Especializadas"
                    : "Specialty Clinic Support"}
                </option>
                <option>
                  {isSpanish
                    ? "Seguimiento con el Médico Primario y Especialistas"
                    : "Follow-Up with Primary Doctor and Specialists"}
                </option>
                <option>{isSpanish ? "Nutrición" : "Nutrition"}</option>
                <option>
                  {isSpanish ? "Transporte Gratuito" : "Free Transportation"}
                </option>
              </select>
            </div>

            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  name="message"
                  className="form-control rounded-pill"
                  id="inputMessage"
                  placeholder={isSpanish ? "Mensaje" : "Message"}
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="btn btn-danger btn-mssg rounded-pill">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_27_126)">
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
            {successMessage && (
              <div className="text-success mt-3">{successMessage}</div>
            )}
            {formError && <div className="text-danger">{formError}</div>}
          </form>
        </div>

        <div className="col-lg-12 mt-0 pb-0 d-flex flex-column justify-content-center align-items-center">
          {small && <img src={goupLogo} alt="Go Up" id="GoUpLogo" />}
          <img
            src={footer}
            className={`${small ? "footer-small" : ""}`}
            alt="footer"
            id="Footer-img"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
