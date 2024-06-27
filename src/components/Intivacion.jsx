import React, { useEffect } from "react";

// Components
import FirstPage from "./invitacion/FirstPage";
import SecondPage from "./invitacion/SecondPage";
import ParentsSection from "./invitacion/ParentsSection";
import GodparentsSection from "./invitacion/GodparentsSection";
import Itinerary from "./invitacion/Itinerary";
import Location from "./invitacion/Location";
import GiftSection from "./invitacion/GiftSection";
import PhotoGallerySection from "./invitacion/PhotoGallerySection";
import Sobre from "./invitacion/Sobre";
import LastPage from "./invitacion/LastPage";

// Libraries
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useRef } from "react";
import decoration from "../assets/img/Untitled design (3).png";

// Styles
import "animate.css";
import "aos/dist/aos.css";
import "./invitacion.css";
import AOS from "aos";

// Context
import { useGuest } from "../Context/GuestContext";

// React Router
import { useParams } from "react-router-dom";

const Intivacion = () => {
  const audioRef = useRef(null);
  const {
    guest,
    setGuest,
    fetchDataByGuest,
    reservationDone,
    setReservationDone,
  } = useGuest();

  const [isPlaying, setIsPlaying] = useState(false);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [hide, setHide] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [reservationDeny, setReservationDeny] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
  const [text, setText] = useState({
    firstText:
      " Por favor confirma tu asistencia al evento antes del 15 de Junio, después de esta fecha la confirmación no podrá realizarse.",
    secondText:
      "En caso de que no puedan asistir, por favor, también háznoslo saber.",
    thirdText:
      "En caso de que no puedas asistir, por favor, también háznoslo saber.",
  });

  let { id, code } = useParams();

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.audioEl.current.pause();
    } else {
      audioRef.current.audioEl.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  function abrir() {
    setOpenInvitation(true);
    window.scrollTo(0, 0);
    setTimeout(function () {
      setHide(false);
      togglePlayPause();
    }, 2500);
  }

  const handleCheckboxChange = (index, boolean) => {
    const updatedAccompanist = [...guest.acompanist];
    updatedAccompanist[index].asist = boolean;
    setGuest({ ...guest, acompanist: updatedAccompanist });
  };

  const handleSubmit = async (event, boolean) => {
    event.preventDefault();
    console.log("hola");
    let invitados;

    if (boolean) {
      const denyAsistence = guest?.acompanist.map((person) => ({
        ...person,
        asist: false,
      }));

      invitados = { ...guest, acompanist: denyAsistence };
    }

    // Guardar los datos actualizados en Firestore
    setLoading(true);
    const guestDoc = doc(db, "people", id);
    await updateDoc(guestDoc, boolean ? invitados : guest)
      .then(() => {
        if (boolean) {
          setOpenModal(true);
          setReservationDone(true);
          setReservationDeny(true);
          setLoading(false);
        } else
          setTimeout(() => {
            setLoading(false);
            setReservationDone(true);
          }, 4000);
      })
      .catch((error) => {
        console.error("Error actualizando los datos: ", error);
      });
  };

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openModal]);

  useEffect(() => {
    const filterGuestNull = guest?.acompanist?.filter((g) => g.asist === null);
    const filterGuestFalse = guest?.acompanist?.filter(
      (g) => g.asist === false
    );
    // Si ya todos los invitados han dado una respuesta entonces
    if (
      filterGuestNull?.length === 0 &&
      filterGuestFalse?.length != guest?.acompanist?.length
    ) {
      // El botón de obtener mis pases se habilita
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
      // setReservationDeny(true);
    }

    if (
      filterGuestFalse != undefined &&
      filterGuestFalse?.length === guest?.acompanist?.length &&
      openModal === false
    ) {
      setReservationDeny(true);
    }
  }, [guest]);

  useEffect(() => {
    AOS.init();
    if (id) {
      fetchDataByGuest(id, code);
    }
    const countDownDate = new Date("Jul 26, 2024 09:30").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, expired: false });
      }
    };
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const countDownDateAsistence = new Date("Jun 25, 2024 09:31").getTime();

    const countdownAsistence = () => {
      const now = new Date().getTime();
      const distance = countDownDateAsistence - now;

      if (distance < 0) {
        clearInterval(secondIntervalId);
        setText({ firstText: "", secondText: "" });
      }
    };

    const secondIntervalId = setInterval(countdownAsistence, 1000);

    return () => clearInterval(secondIntervalId);
  }, []);

  return (
    <div className={` w-100 ${!openInvitation && "avoiding-scroll"}`}>
      {/* Sobre */}
      <Sobre abrir={abrir} openInvitation={openInvitation} hide={hide} />
      {/* <!-- Invitacion --> */}
      <div id="invitacion" className={`invitacion ${hide ? "hide" : ""}`}>
        <FirstPage isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
        <SecondPage timeLeft={timeLeft} />
        <section className="pase">
          <p className="m-0 display-6">El inicio de la familia Juárez Macías</p>
        </section>
        <ParentsSection />
        <section className="container3 bg-gold p-4 m-0">
          <div className="d-flex justify-content-center">
            <p className="w-80 text-center text-white display-6 m-0 p-2">
              Compartir estos momentos con ustedes, los hace inolvidables.
            </p>
          </div>
        </section>
        <GodparentsSection />
        <section className="container3 bg-gold p-4 m-0">
          <div className="d-flex justify-content-center">
            <p className="w-50 text-center text-white m-0 p-2 display-6">
              ¡Nos gustaría mucho que nos acompañaras!
            </p>
          </div>
        </section>
        <Itinerary />
        <Location />
        <PhotoGallerySection />
        <GiftSection />
        <section className="pase bg-gold p-4">
          <p className="text-white text-center display-6">
            Este día es muy especial y que vayas ¡lo hace aún más!
          </p>
        </section>
        <section className="bg-gray p-3">
          <p className="text-center p-0 m-0">
            <i className="bi bi-hearts"></i>Respetuosamente NO NIÑOS
          </p>
        </section>
        <section className="text-center p-4 lead overflow-hidden">
          <h3
            className="font-paris principal-name-guest "
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            {guest?.principalName}
          </h3>
          {guest?.acompanist?.length === 1 ? (
            <p>Hemos reservado {guest?.acompanist?.length} lugar para ti</p>
          ) : (
            <>
              <p>
                Hemos reservado {guest?.acompanist?.length} lugares para ustedes
              </p>
            </>
          )}
          <div className={`${text.firstText === "" && "mb-4"}`}>
            {guest?.acompanist?.map((person, key) => (
              <p
                key={key}
                className="mb-0 display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {person.name}
              </p>
            ))}
          </div>

          {text.firstText != "" && (
            <p
              className="display-4 mt-4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              ¡Confirma tu asistencia!
            </p>
          )}
          <div className="pb-4 d-flex justify-content-center align-items-center">
            <img
              loading="lazy"
              src={decoration}
              alt="linae"
              className="decoration"
            />
          </div>
          <div
            className={`d-flex justify-content-center align-items-center flex-column ${
              text?.firstText != "" ? "mb-4" : "mb-0"
            }`}
          >
            <div
              className="w-80 py-4"
              data-aos="fade-in"
              data-aos-duration="3000"
            >
              Gracias por ayudarnos con la organización de nuestro evento.
              {text?.firstText != "" && (
                <>
                  <p
                    className="pt-2"
                    data-aos="fade-in"
                    data-aos-duration="2500"
                  >
                    {text.firstText}
                  </p>
                  <p
                    className="pt-2"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                  >
                    {guest?.acompanist?.length === 1
                      ? text.thirdText
                      : text.secondText}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="d-flex flex-column overflow-hidden">
            {reservationDone && reservationDeny === false ? (
              <>
                <button
                  className="mb-3 btn-save"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Ver mis pases <i className="bi bi-ticket font-icon"></i>
                </button>
              </>
            ) : reservationDone && reservationDeny ? (
              <div className="overflow-hidden">
                <p data-aos="fade-right" data-aos-duration="2000">
                  Haz confirmado que no podrás acompañarnos
                </p>
                <p data-aos="fade-left" data-aos-duration="2000">
                  Gracias por darnos tu respuesta
                </p>
              </div>
            ) : text?.firstText != "" ? (
              <>
                <button
                  className="mb-3 btn-save "
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <p className="animate__animated animate__pulse animate__infinite mb-0">
                    <i className="bi bi-check text-white"></i> Confirmar
                  </p>
                </button>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={(event) => {
                      handleSubmit(event, true);
                    }}
                    className="text-white btn-no-asistir"
                  >
                    <i className="bi bi-x "></i>
                    {guest?.acompanist?.length === 1
                      ? "No podré asistir"
                      : "No podremos asistir "}
                  </button>
                </div>
              </>
            ) : (
              text.firstText === "" && (
                <div>
                  <p data-aos="zoom-out" data-aos-duration="2000">
                    El tiempo de confirmación de asistencia ha pasado.
                  </p>
                </div>
              )
            )}
          </div>
          {openModal && (
            <>
              <div className="modal-pases" tabindex="-1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header"></div>
                    <div className="modal-body">
                      <div>
                        {reservationDeny === false ? (
                          <p className="font-paris display-3">
                            ¡Gracias por darnos el sí!
                          </p>
                        ) : (
                          <p className="font-paris display-3">
                            ¡Te extrañaremos!
                          </p>
                        )}
                        {id && loading && reservationDeny === false ? (
                          <>
                            <p>Tus pases se están generando</p>
                          </>
                        ) : id &&
                          loading === false &&
                          !reservationDone &&
                          reservationDeny === false ? (
                          <>
                            <p>
                              Por favor, marca una respuesta por cada invitado y
                              después presiona en el botón{" "}
                              <span className="f-w-700">Continuar</span> para
                              que puedas generar tu pase al evento .
                            </p>
                          </>
                        ) : id &&
                          reservationDone &&
                          reservationDeny === false ? (
                          <>
                            <div>Pase de Entrada</div>
                          </>
                        ) : (
                          reservationDeny && (
                            <div>
                              <h3>
                                Lamentamos que no puedas acompañarnos en este
                                momento
                              </h3>
                              <p></p>
                              Entendemos si no te es posible asistir y te
                              agradecemos tu honestidad. Esperamos celebrar
                              contigo o con ustedes en otro momento.
                              <p className="mt-3">
                                Tus pases serán reasignados.
                              </p>
                            </div>
                          )
                        )}
                      </div>
                      {id &&
                      loading === false &&
                      reservationDone === false &&
                      reservationDeny === false ? (
                        <>
                          <form
                            onSubmit={(event) => {
                              handleSubmit(event, false);
                            }}
                          >
                            {guest?.acompanist?.map((accomp, index) => (
                              <>
                                <p
                                  id={index}
                                  className="mb-0 font-paris display-5"
                                >
                                  {accomp.name}
                                </p>
                                <div className="d-flex mb-4 justify-content-center">
                                  <div
                                    key={index}
                                    className="checkbox-wrapper-53"
                                  >
                                    <label className="container">
                                      <div className="d-flex">
                                        <p className="mb-0">sí asistiré</p>
                                        <input
                                          id={index}
                                          type="checkbox"
                                          checked={accomp.asist}
                                          onChange={() =>
                                            handleCheckboxChange(index, true)
                                          }
                                        />
                                        <div className="checkmark"></div>
                                      </div>
                                    </label>
                                  </div>
                                  <div
                                    key={index}
                                    className="checkbox-wrapper-53"
                                  >
                                    <label className="container">
                                      <div className="d-flex">
                                        <p className="mb-0">no podré asistir</p>
                                        <input
                                          id={index}
                                          type="checkbox"
                                          checked={accomp.asist === false}
                                          onChange={() =>
                                            handleCheckboxChange(index, false)
                                          }
                                        />
                                        <div className="checkmark"></div>
                                      </div>
                                    </label>
                                  </div>
                                </div>
                              </>
                            ))}
                            <div className="d-flex flex-column">
                              <button
                                disabled={disabledBtn}
                                className={`${
                                  disabledBtn ? "btn-save-disabled" : "btn-save"
                                }`}
                                type="submit"
                              >
                                Continuar
                              </button>
                            </div>
                          </form>
                          <div className="modal-footer justify-content-between">
                            <button
                              onClick={() => {
                                setOpenModal(false);
                              }}
                              type="button"
                              className="btn-cerrar justify-content-center w-100"
                              data-bs-dismiss="modal"
                            >
                              Confirmar más tarde
                            </button>
                          </div>
                        </>
                      ) : id && loading ? (
                        <div className="spinner-grow" role="status">
                          <span className="sr-only"></span>
                        </div>
                      ) : id &&
                        reservationDone === true &&
                        reservationDeny === false ? (
                        <>
                          <div> QR</div>
                          <div className="modal-footer justify-content-between">
                            <button
                              onClick={() => {
                                setOpenModal(false);
                              }}
                              type="button"
                              className="btn-cerrar justify-content-center w-100"
                              data-bs-dismiss="modal"
                            >
                              Cerrar
                            </button>
                          </div>
                        </>
                      ) : (
                        id &&
                        reservationDeny && (
                          <>
                            <div className="modal-footer justify-content-between">
                              <button
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                                type="button"
                                className="btn-cerrar justify-content-center w-100"
                                data-bs-dismiss="modal"
                              >
                                Cerrar
                              </button>
                            </div>
                          </>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
        <LastPage reservationDeny={reservationDeny} />
      </div>
      {/* <!-- icons --> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      {/* <!-- google fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default Intivacion;
