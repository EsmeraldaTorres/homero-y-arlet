import React, { useEffect } from "react";

// Components
import FirstPage from "./invitacion/FirstPage";
import SecondPage from "./invitacion/SecondPage";
import ParentsSection from "./invitacion/ParentsSection";
import Itinerary from "./invitacion/Itinerary";
import Location from "./invitacion/Location";
import GiftSection from "./invitacion/GiftSection";
import Sobre from "./invitacion/Sobre";
import LastPage from "./invitacion/LastPage";

import FormOne from "./invitacion/FormOne";
import FormTwo from "./invitacion/FormTwo";
import FormThree from "./invitacion/FormThree";
// Libraries "firebase/firestore";

import { useState, useRef } from "react";

// Styles
import "animate.css";
import "aos/dist/aos.css";
import "./invitacion.css";
import AOS from "aos";

// Context

// React Router
import { Link, useParams } from "react-router-dom";
import HotelSection from "./invitacion/HotelSection";
import DinamicGallerySection from "./invitacion/DinamicGallerySection";
import DressCode from "./invitacion/DressCode";
import PhotoGallerySection from "./invitacion/PhotoGallerySection";

const Intivacion = () => {
  const audioRef = useRef(null);
  let { guests } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [hide, setHide] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  const [text, setText] = useState({
    firstText:
      " Por favor, apoyanos con la organización de nuestro evento y confirma tu asistencia registrandote en el siguiente formulario antes del 25 de Octubre.",
    secondText:
      "En caso de que no puedan asistir, no es necesario completar el formulario.",
    thirdText:
      "En caso de que no puedas asistir, no es necesario que completes el formulario.",
  });


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
      setHide(false);
      togglePlayPause();

  }

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
    if (openInvitation) {
      setTimeout(() => {
        AOS.init({ duration: 1000, once: true });
      },4000);
    }
  }, [openInvitation]);

  useEffect(() => {
    AOS.init();
    const countDownDate = new Date("Jul 05, 2026 00:00").getTime();
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
    const countDownDateAsistence = new Date("Jun 30, 2026 00:00").getTime();

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
    <div className={`w-100 ${!openInvitation && "avoiding-scroll" }`}>
      {/* Sobre */}
      <Sobre
        abrir={abrir}
        openInvitation={openInvitation}
        hide={hide}
        openModal={openModal}
      />
      {/* <!-- Invitacion --> */}
      <div className={`invitacion ${hide && "hide"}`}>
        <FirstPage
                  hide={hide}

          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          audioRef={audioRef}
        />
        <SecondPage timeLeft={timeLeft} />
        <Location />
        <Itinerary />
        <ParentsSection />
        <PhotoGallerySection />
        <GiftSection/>
        <DressCode />
        <section className="ribbon">
          <p className="m-0 display-6">
              Niños buenas noches, 
              <p className="p-0 m-0 display-6">adultos ¡buena noche!</p>
              <p className="p-0 m-0 display-6">(No niños)</p> 
          </p>
        </section>
        <HotelSection/>
        <DinamicGallerySection/>

        <div
            className={`d-flex bg-white justify-content-center align-items-center flex-column ${
              text?.firstText != "" ? "pb-4" : "mb-0"
            }`}
          >
            <div
              className="w-75 py-4 bg-white "
              data-aos="fade-in"
              data-aos-duration="3000"
            >
              <p className="color-in text-center">Queridos novios! Llenen los siguientes campos para que vean el funcionamiento del sistema de confirmación del paquete Platino y recuerden que todo es personalizable si algo no les gusta o si necesitan más preguntas en el formulario. (Este mensaje no saldrá en su invitación)</p>
              {guests === "1" ? (
                <div >
                <p className="text-center pt-4 font-paris title2">
                Hemos reservado 1 lugar para ti
                </p>
              </div>
              ) : guests === "2" ?(  <div>
                <p className="text-center pt-4 font-paris title2 mb-0">
                Hemos reservado 1 lugar para ti y para 1 acompañante.
                </p>
              </div>) : <>
              <p className="text-center pt-4 font-paris title2 mb-0">
              Hemos reservado 1 lugar para ti y para {guests - 1} acompañantes.
                </p></> }
              {text?.firstText != "" ? (
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
                    { guests === "1" ? 
                    
                    text.thirdText : text.secondText}
                  </p>
                            
                    <div className="d-flex justify-content-center font w-100 align-items">
          {
              guests === "1" ? (
<FormOne/>
              ) : guests === "2" ? (
                <FormTwo/>
              ) : <FormThree num={guests}/>
            }
                    </div></>
           ) 
           : (<>
           <p className="text-center">El tiempo de registro de asistencia ha pasado</p></> )}
            </div>
          </div>
    <LastPage/>
      </div>
      {/* <!-- icons --> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      {/* <!-- google fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Dancing+Script:wght@400..700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Ephesis&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Scope+One&family=Tangerine:wght@400;700&display=swap" rel="stylesheet"/>
    </div>
  );
};

export default Intivacion;
