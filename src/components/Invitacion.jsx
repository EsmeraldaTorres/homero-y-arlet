import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./invitacion.css";

// Componentes
import FirstPage from "./invitacion/FirstPage";
import SecondPage from "./invitacion/SecondPage";
import ParentsSection from "./invitacion/ParentsSection";
import Itinerary from "./invitacion/Itinerary";
import Location from "./invitacion/Location";
import GiftSection from "./invitacion/GiftSection";
import Sobre from "./invitacion/Sobre";
import LastPage from "./invitacion/LastPage";
import HotelSection from "./invitacion/HotelSection";
import DinamicGallerySection from "./invitacion/DinamicGallerySection";
import DressCode from "./invitacion/DressCode";
import PhotoGallerySection from "./invitacion/PhotoGallerySection";
import GuestForm from "./invitacion/GuestForm";
import InvitacionesNavbar from "./invitacion/InvitacionesNavbar";
import lineDecoration from "../assets/img/linea3.png";
import linea from "../assets/img/linea2.png";

const Invitacion = () => {
  const { guests } = useParams();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [hide, setHide] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const [timeCountDown, setTimeCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  const [text, setText] = useState({
    firstText:
      " Por favor, apoyanos con la organización de nuestro evento y confirma tu asistencia registrandote en el siguiente formulario antes del 5 de Noviembre.",
    secondText:
      "En caso de que no puedan asistir, no es necesario completar el formulario.",
    thirdText:
      "En caso de que no puedas asistir, no es necesario que completes el formulario.",
  });

  const togglePlayPause = () => {
    const audio = audioRef.current?.audioEl.current;
    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const abrir = () => {
    setOpenInvitation(true);
    setShowNavbar(false);
    window.scrollTo(0, 0);
    setHide(false);
    togglePlayPause();
  };

  // Prevent scroll on modal open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", openModal);
    return () => document.body.classList.remove("overflow-hidden");
  }, [openModal]);

  // AOS animation init
  useEffect(() => {
    if (openInvitation) {
      setTimeout(() => AOS.init({ duration: 1000, once: true }), 4000);
      document.documentElement.style.overflow = "initial"; // <html>
      document.body.style.overflow = "initial";
      document.documentElement.style.height = "initial"; // <html>
      document.body.style.height = "initial";
    }
  }, [openInvitation]);

  // General countdown (for the wedding)
  useEffect(() => {
    const countDownDate = new Date("Nov 29, 2025 16:30").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeCountDown((prev) => ({ ...prev, expired: true }));
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setTimeCountDown({ days, hours, minutes, seconds, expired: false });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Deadline to fill attendance form
  useEffect(() => {
    const asistDate = new Date("Nov 06, 2025 00:00").getTime();

    const asistInterval = setInterval(() => {
      if (Date.now() > asistDate) {
        clearInterval(asistInterval);
        setText({ firstText: "", secondText: "", thirdText: "" });
      }
    }, 1000);

    return () => clearInterval(asistInterval);
  }, []);

  const renderReservationText = () => {
    const extra = guests - 1;
    if (guests === "1")
      return (
        <p className="text-center mb-4 mt-4 display-5 f-w-700 font-gold1">
          HEMOS RESERVADO <span className="display-2">1</span> LUGAR PARA TI
        </p>
      );
    if (guests === "2")
      return (
        <p className="text-center mb-4 mt-4 display-5 f-w-700 font-gold1">
          HEMOS RESERVADO <span className="display-2">1</span> LUGAR PARA TI Y
          PARA <span className="display-2">1</span> ACOMPAÑANTE
        </p>
      );
    return (
      <p className="text-center mb-4 mt-4 display-5 f-w-700 font-gold1">
        HEMOS RESERVADO <span className="display-2">1</span> LUGAR PARA TI Y
        PARA <span className="display-2">{extra}</span> ACOMPAÑANTES{" "}
      </p>
    );
  };

  return (
    <div className={`w-100 ${!openInvitation ? "avoiding-scroll" : ""}`}>
      <Sobre
        abrir={abrir}
        openInvitation={openInvitation}
        hide={hide}
        openModal={openModal}
      />

      <div className={`invitacion ${hide ? "hide d-none" : ""}`}>
        <InvitacionesNavbar
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />
        <FirstPage
          hide={hide}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          audioRef={audioRef}
        />
        <SecondPage timeCountDown={timeCountDown} />
        <Location />
        <Itinerary />
        <ParentsSection />
        <PhotoGallerySection />
        <GiftSection />
        <DressCode />

        <section className="ribbon">
          <p className="m-0 display-6">
            Para la fiesta: Tragos
            <br />
            Para los niños: Dulces Sueños. <br />
            (No niños)
          </p>
        </section>

        <HotelSection />
        {/* <DinamicGallerySection /> */}

        {/* Confirmación de asistencia */}
        <div
          className={`d-flex bg-white justify-content-center align-items-center flex-column ${
            text.firstText ? "pb-4" : "mb-0"
          }`}
        >
          <div
            className="w-75 py-4 bg-white"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            <div className="d-flex justify-content-around align-items-center">
              <img
                className="decoration mt-4 rotate-0"
                src={lineDecoration}
                alt="linea"
              />
            </div>
            <div id="confirmar">{renderReservationText()}</div>
            {text.firstText ? (
              <>
                <p
                  className="pt-2 text-center lead"
                  data-aos="fade-in"
                  data-aos-duration="2500"
                >
                  {text.firstText}
                </p>
                <p
                  className="pt-2 text-center lead"
                  data-aos="fade-in"
                  data-aos-duration="2500"
                >
                  {guests === "1" ? text.thirdText : text.secondText}
                </p>
                <div className="d-flex flex-column  justify-content-center font w-100 align-items">
                  <div className="d-flex justify-content-around align-items-center">
                    <img
                      className="decoration mt-4 rotate-0"
                      src={linea}
                      alt="linea"
                    />
                  </div>
                  <GuestForm tickets={guests} />
                </div>
              </>
            ) : (
              <p className="text-center display-6">
                El tiempo de registro de asistencia ha pasado. Solo los
                invitados que se registraron podrán asistir a nuestro evento.
              </p>
            )}
          </div>
        </div>

        <LastPage />
      </div>

      {/* Recursos externos */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Dancing+Script:wght@400..700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Ephesis&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Scope+One&family=Tangerine:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default Invitacion;
