import React from "react";
import decoration from "../../assets/img/Untitled design (3).png";
import lineaAlReves from "../../assets/img/lineaalreves.png";
import fechaImg from "../../assets/img/fecha-jorge.png";
import { useGuest } from "../../Context/GuestContext";
import useCountdown from "../../hooks/useCountDown";

const SecondPage = () => {
  const { eventData } = useGuest();
  const timeCountDown = useCountdown(eventData.countDown);

  return (
    <>
      <section className="fecha-foto p-4 d-flex flex-column justify-content-around  pt-4">
        <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="w-100 width-30"
            src={fechaImg}
            alt="linea"
          />
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration pb-4 "
            src={lineaAlReves}
            alt="linea"
          />
        </div>
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <p className="display-5 font-paris text-dark">Faltan</p>
            <div id="demo" className="cuenta-regresiva m-0">
              {timeCountDown.expired ? (
                <p>EXPIRED</p>
              ) : (
                <p>
                  {timeCountDown.days}d {timeCountDown.hours}h{" "}
                  {timeCountDown.minutes}m {timeCountDown.seconds}s
                </p>
              )}
            </div>
          </div>
          <div
            id="xv"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="animate__animated bg-cuenta-regresiva"
          >
            <p
              id="demo"
              className="pl-4 animate__animated pr-4 font-kalam font-2rem  cuenta-regresiva"
            ></p>
          </div>
          <p
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="mb-0 display-6 text-center"
          >
            SAVE THE DATE
          </p>
        </div>
      </section>
      <section className="main-text-page p-4 d-flex justify-content-center pt-4">
        <p
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-offset="320"
          className="display-4 font-paris w-100 text-shadow2 text-center text-white pt-4rem h-max-content position-absolute animate-text pb-3"
        >
          Nuestra Boda
        </p>
      </section>
      <section className="main-phrase d-flex justify-content-center">
        <div className="w-75">
          <div className="d-flex justify-content-center pb-4rem">
            <img
              loading="lazy"
              className="decoration"
              src={decoration}
              alt="decoration"
            />
          </div>
          <div
            className="pb-4 mb-4 font-paris text-center animate-text text-main d-flex flex-column align-items-center "
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <p
              className="principal-text"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Hay momentos en la vida que son especiales por si solos, pero
              compartirlos con las personas que quieres los convierte en
              momentos inolvidables.
            </p>
            <p
              className="principal-text"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Tu presencia ha sido una parte valiosa de nuestra historia de
              amor, y no podríamos comenzar este nuevo capítulo sin ti.
            </p>
            <div className="d-flex justify-content-around align-items-center">
              <img
                loading="lazy"
                className="decoration mb-4 pb-4 rotated-element"
                src={lineaAlReves}
                alt="linea"
              />
            </div>
            <p
              className="principal-text"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Nos encantaría que nos acompañaras y nos llenaras de alegría en
              nuestro día tan especial.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <img
              loading="lazy"
              className="decoration"
              src={decoration}
              alt="decoration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondPage;
