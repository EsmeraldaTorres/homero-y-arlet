import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import lineDecoration from "../../assets/img/linea3.png";
import { Link } from "react-router-dom";
import AddToCalendar from "./AddToCalendar";
import { motion } from "framer-motion"; // Importa Framer Motion
import { useGuest } from "../../Context/GuestContext";
import { span } from "framer-motion/client";

const GuestForm = ({ tickets, acompNames = [] }) => {
  const { eventData } = useGuest();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    food: "",
    tickets: tickets.toString(),
    acompanist: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [soltero, setSoltero] = useState(""); // "si", "no" o ""

  const [acompanist, setAcompanist] = useState(null);
  const [send, setSend] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [acompanante, setAcompanante] = useState(""); // solo si tickets = 1
  const spinnerRef = useRef(null);
  const mensajeRef = useRef(null);

  const date = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      date: new Date().toISOString(),
    };
    setSend(true);

    setTimeout(() => setIsSubmitting(true), 500);

    try {
      await addDoc(collection(db, "people"), finalData);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleInputChange = (index, value) => {
    const newAcompanist = [...formData.acompanist];
    newAcompanist[index] = value; // Actualiza el valor en la posición correspondiente
    setFormData({ ...formData, acompanist: newAcompanist });
  };

  const handleAcompananteChange = (value) => {
    if (acompanante === value) {
      setAcompanante(""); // Si vuelve a hacer click, deselecciona
    } else {
      setAcompanante(value);
      setSoltero(""); // Reiniciar la segunda pregunta
    }
  };

  useEffect(() => {
    if (submitted && mensajeRef.current) {
      mensajeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [submitted]);

  useEffect(() => {
    if (isSubmitting && spinnerRef.current) {
      console.log(send, "send");
      spinnerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isSubmitting]);

  useEffect(() => {
    console.log(tickets, "tickets");
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center container-1">
      {!isSubmitting && !submitted && (
        <div className="text-center mb-4 mt-4 display-5 f-w-700 font-gold1">
          ASISTENCIA PARA
          {tickets === "1" ? (
            <>
              {" "}
              <span className="display-2"> 1 </span> <span>PERSONA</span>{" "}
            </>
          ) : (
            <>
              <span className="display-2"> {tickets}</span>{" "}
              <span>PERSONAS</span>
            </>
          )}
          {/* {tickets === 1 ? "1 PERSONA" : `${tickets} PERSONAS`}{" "} */}
        </div>
      )}

      {!isSubmitting && !submitted && (
        <form
          onSubmit={handleSubmit}
          className={`animate__animated p-1 ${send && "animate__zoomOut"}`}
        >
          <p className="mb-0 display-5 font-paris">Nombre Completo:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-100 p-2"
            required
            placeholder="Tu nombre completo aquí"
          />
          {/* {tickets === 2 && (
            <>
              <p className="mb-0 mt-4  display-5 font-paris">
                ¿Tienes acompañante?
              </p>
              <div>
                <div className="d-flex ">
                  <div className="checkbox-wrapper-25">
                    <input
                      type="checkbox"
                      id="checkbox-si-1"
                      checked={acompanante === "si"}
                      onChange={() => handleAcompananteChange("si")}
                    />
                    <label htmlFor="checkbox-si-1" className="m-2 lead">
                      <span></span>Sí
                    </label>
                  </div>
                  <div className="checkbox-wrapper-24">
                    <input
                      type="checkbox"
                      id="checkbox-no-1"
                      checked={acompanante === "no"}
                      onChange={() => handleAcompananteChange("no")}
                    />
                    <label htmlFor="checkbox-no-1" className="mt-2 lead">
                      <span></span>No
                    </label>
                  </div>
                </div>
                {acompanante === "si" && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                    animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                    exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                    transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                  >
                    <div className="text-center">
                      <input
                        type="text"
                        className="w-100 p-2 mb-4 mt-1 text-centr"
                        placeholder="Nombre de tu acompañante"
                        value={formData.acompanist}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            acompanist: e.target.value,
                          })
                        }
                        required={acompanante === "si"}
                      />
                    </div>
                  </motion.div>
                )}
               {acompanante === "no" && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                    animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                    exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                    transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                  >
                    <div>
                      <p className="lead mt-3 mb-0">¡Tranquilo!</p>
                      <p className="lead">
                        Habrá varios solteros en la fiesta, así que será un buen
                        momento para conocer gente nueva.
                      </p>
                      <p className="mb-0 display-5 font-paris">
                        {" "}
                        ¿Te gustaría aparecer en la lista de solteros?
                      </p>
                      <div className="d-flex justify-content-center">
                        <div className="checkbox-wrapper-25">
                          <input
                            type="checkbox"
                            id="checkbox-si-2"
                            checked={soltero === "si"}
                            onChange={() => handleSolteroChange("si")}
                          />
                          <label htmlFor="checkbox-si-2" className="m-2 lead">
                            <span></span>Sí
                          </label>
                        </div>
                        <div className="checkbox-wrapper-24">
                          <input
                            type="checkbox"
                            id="checkbox-no-2"
                            checked={soltero === "no"}
                            onChange={() => handleSolteroChange("no")}
                          />
                          <label htmlFor="checkbox-no-2" className="mt-2 lead">
                            <span></span>No
                          </label>
                        </div>
                      </div>
                       Si elige "No" en la segunda pregunta 
                      {soltero === "no" && (
                        <>
                          <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                            animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                            exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                            transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                          >
                            <p className="lead mb-0 mt-2">
                              Entendemos, no hay problema.
                            </p>
                            <p className="lead">
                              ¡Lo importante es que disfrutes del día con
                              nosotros!
                            </p>
                          </motion.div>{" "}
                        </>
                      )} 

                       Si elige "Sí" en la segunda pregunta 
                       {soltero === "si" && (
                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                          animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                          exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                          transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                        >
                          <div>
                            <p className="lead mt-3 mb-3">¡Excelente!</p>

                            <p className="mb-0 display-5 font-paris ">
                              {" "}
                              Por favor, apóyanos con tu Instagram
                            </p>
                            <div className="d-flex w-100 flex-column text-center">
                              <input
                                className="w-100 p-2 mb-3"
                                type="text"
                                value={formData.instagram}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    instagram: e.target.value,
                                  })
                                }
                                placeholder="@tu.instagram"
                                required={soltero === "si"}
                              />
                              <p className="lead">
                                {" "}
                                ¡Y compartenos el enlace de tu mejor foto!
                              </p>
                              <p className="mb-1 text-ble">
                                1. En las fotos que has publicado de tu
                                instagram, abre la que consideres tu mejor foto.
                              </p>
                              <p className="mb-1 text-ble">
                                2. Toca el icono parecido a este{" "}
                                <i className="bi bi-cursor display-5"></i>, que
                                está justo debajo y en los iconos de la
                                izquierda.
                              </p>
                              <p className="mb-3 text-bue">
                                3. Toca el icono de copiar enlace{" "}
                                <i class="bi bi-link-45deg display-5"></i> y
                                pegalo en el siguiente espacio
                              </p>

                              <input
                                className="w-100 p-2"
                                type="text"
                                value={formData.fotoInstagram}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fotoInstagram: e.target.value,
                                  })
                                }
                                placeholder="https://www.instagram.com/p/C-RDZiGgRqA/?igsh=djd1b2loMWR3aW8y"
                                required={soltero === "si"}
                              />
                            </div>
                            <div className="w-100 mt-2 mb-0 d-flex flex-column align-items-center">
                              <div className="w-100"></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                {acompanist && (
                  <div
                    className={`mt-1 animate__animated ${
                      acompanist ? "animate__zoomIn" : "animate__zoomOut"
                    }`}
                  >
                    <input
                      type="text"
                      name="food"
                      value={formData.food}
                      onChange={(e) =>
                        setFormData({ ...formData, acompanist: e.target.value })
                      }
                      id="2"
                      className="w-100 p-2 "
                      placeholder="Nombre"
                    />
                  </div>
                )}
              </div>
              <div>
                {acompanist === false && (
                  <div
                    className={`mt-1 animate__animated ${
                      acompanist === false
                        ? "animate__zoomIn"
                        : "animate__zoomOut"
                    }`}
                  >
                    <input
                      type="text"
                      name="food"
                      value={formData.food}
                      onChange={(e) =>
                        setFormData({ ...formData, acompanist: e.target.value })
                      }
                      id="2"
                      className="w-100 p-2"
                      placeholder="Nombre"
                    />
                  </div>
                )}
              </div>
            </>
          )} */}
          {tickets > 1 && (
            <>
              <div>
                <p className="mb-0  display-5 font-paris mt-4">
                  {tickets < 3
                    ? `Escribe el nombre completo de ${
                        tickets - 1
                      } acompañante:`
                    : `Escribe el nombre completo de ${
                        tickets - 1
                      } acompañantes:`}
                </p>

                <div className="mt-0">
                  <div className="d-flex justify-content-center"></div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                    animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                    exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                    transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                  >
                    <div className="text-center">
                      {Array.from({ length: tickets - 1 }).map((_, index) => (
                        <>
                          <input
                            key={index}
                            type="text"
                            className="w-100 p-2 mb-3 mt-0"
                            placeholder={`${
                              tickets === 2
                                ? "Nombre de tu acompañante"
                                : `Nombre de acompañante ${index + 1}`
                            }`}
                            value={formData.acompanist[index] || ""} // Evita valores undefined
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                            required={acompanante === "si"}
                          />
                        </>
                      ))}
                    </div>
                  </motion.div>
                  {acompanante === "no" && (
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                      animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                      exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                      transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                    >
                      <div></div>
                    </motion.div>
                  )}
                  {acompanist && (
                    <div
                      className={`mt-1 animate__animated ${
                        acompanist ? "animate__zoomIn" : "animate__zoomOut"
                      }`}
                    >
                      <input
                        type="text"
                        name="food"
                        value={formData.food}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            acompanist: e.target.value,
                          })
                        }
                        id="2"
                        className="w-100 p-2 "
                        placeholder="Nombre"
                      />
                    </div>
                  )}
                </div>
                <div>
                  {acompanist === false && (
                    <div
                      className={`mt-1 animate__animated ${
                        acompanist === false
                          ? "animate__zoomIn"
                          : "animate__zoomOut"
                      }`}
                    >
                      <input
                        type="text"
                        name="food"
                        value={formData.food}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            acompanist: e.target.value,
                          })
                        }
                        id="2"
                        className="w-100 p-2"
                        placeholder="Nombre"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="mt-4">
            <p className="mb-0 display-5 font-paris">
              Escribe aquí tus buenos deseos para nosotros:
            </p>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-100 p-2 input"
              placeholder="Tu mensaje aquí"
            />
          </div>

          <div className="mt-4">
            <p className="mb-0 display-5 font-paris">
              Tu número de teléfono al cual te enviamos esta invitación:
            </p>
            <input
              type="tel"
              name="phone"
              className="p-2 w-100"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              placeholder="Tu celular aquí"
            />
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <button type="submit" className="w-100 btn-enviar lead font-ep">
              Enviar
            </button>
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <img
              className="decoration mt-4 rotate-180"
              src={lineDecoration}
              alt="linea"
            />
          </div>
          <p className="mt-4 text-center mb-0 lead">
            Este registro sólo es válido si {eventData.bride} o{" "}
            {eventData.groom} te enviaron esta invitación por mensaje.
          </p>
          <div className="d-flex justify-content-center mb-0">
            <hr className="text-center" />
          </div>
          <p className=" text-center mb-0 mt-2 lead">
            Cada asiento está pensado con cariño, así que te pedimos respetar la
            cantidad de invitados asignada.
          </p>
        </form>
      )}

      {isSubmitting && (
        <div
          ref={spinnerRef}
          className="loading-container animate__animated animate__zoomIn d-flex flex-column justify-content-center align-items-center"
        >
          <div className="mt-4 display-6 text-center">
            Tu registro se está completando...{" "}
          </div>
          <Spinner animation="border" className="my-4" color="gray" />
          <div className=" display-6 text-center">No cierres la página.</div>
        </div>
      )}

      {submitted && (
        <div
          ref={mensajeRef}
          className="success-message d-flex flex-column justify-content-center align-items-center text-center animate__animated animate__bounce"
        >
          <p className="text-center mb-4 mt-4 display-5 f-w-700 font-gold1">
            ¡Gracias por darnos el Sí!
          </p>
          <p className="lead">Fecha de registro: {date}</p>

          {typeof formData.acompanist === "string" &&
          formData.acompanist != "" ? (
            <>
              <p className="lead">
                {formData.name} & {formData.acompanist} han quedado registrados
                como invitados a nuestra boda.
              </p>
            </>
          ) : Array.isArray(formData.acompanist) ? (
            <p className="lead">
              {formData.acompanist.join(", ")} & {formData.name} han quedado
              registrados como invitados a nuestra boda.
            </p>
          ) : (
            <p className="lead">
              {formData.name} haz quedado registrado como invitado a nuestra
              boda.
            </p>
          )}
          <p>
            <div className="d-flex justify-content-center">
              <hr className="text-center w-75" />
            </div>
            Te recomendamos tomar una captrua de pantalla de esta respuesta{" "}
            <i class="bi bi-fullscreen"></i>
          </p>
          <div className="text-center d-flex lead flex-column">
            <p className="text-center mb-4 mt-4 display-5  font-gold1">
              ¡Agenda nuestro evento en tus calendarios!
            </p>
            <AddToCalendar type="google" />
            <AddToCalendar type="mobile" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestForm;
