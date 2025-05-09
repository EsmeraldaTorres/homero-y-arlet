import React from "react";
import lineaAlReves from "../../assets/img/lineaalreves.png";
import salonUbicacion from "../../assets/img/salon-cristina.png";
import iglesiaUbicacion from "../../assets/img/iglesia.jpeg";

const Location = () => {
  return (
    <>
      <section className="window-back">
        <div
          className="window-misa"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="200"
        >
          <div className="d-flex justify-content-center align-items-center">
            <p className="display-3 text-center text-shadow2 text-white font-paris pl-4 pr-4">Misa</p>
          </div>
        </div>
      </section>
      <section
        className="recepcion-information  d-flex align-items-center justify-content-center"
      >
        <div>
          <h2 data-aos="zoom-in-up"             data-aos-easing="linear"
          data-aos-duration="1500"
            className="txt-green display-3 title2 text-center font-paris font-gold font-aleo display-4 pr-4 pl-4 mb-4 text-center"
          >
          Capilla San Fernando          
          </h2>
          <div className="d-flex justify-content-center align-items-center">
            <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
              loading="lazy"
              className="img-ubicaciones"
              src={iglesiaUbicacion}
              alt="iglesia"
            />
          </div>
          <p data-aos="zoom-in-up"             
          data-aos-easing="linear"
          data-aos-duration="1500" 
          className="hora pt-4 font-aleo text-center ">12:00pm</p>

          <p data-aos="zoom-in-up"             data-aos-easing="linear"
          data-aos-duration="1500" className="lead font-aleo text-center mr-4 ml-4 text-infor ">
          Calle Isla de Elba 114, Querétaro, Querétaro.
          </p>
          <div className="d-flex justify-content-center pt-4">
            <img
              className="decoration"
              src={lineaAlReves}
              alt="decoration"
            />
          </div>
          <div className="d-flex align-items-center py-4 justify-content-center">
            <a
              className=""
              target="_blank"
              href="https://www.google.com/maps/place/Capilla+San+Peregrino+Laziosi/@21.9313725,-102.3243691,15z/data=!4m6!3m5!1s0x8429ef3e2b1278e7:0x7fd5303f7cc86d3f!8m2!3d21.9313725!4d-102.3243691!16s%2Fg%2F11fsmvbscp?entry=ttu"
              ><button
                className="animate__pulse animate__animated animate__infinite btn btn-ver-mapa display-6 py-3 d-flex align-items-center"
              >
                <i className="bi bi-geo-alt text-dark "></i>
                <span
                  className=" d-flex text-dark font-cormo align-items-center justify-content-center p-0 m-0"
                >
                  Cómo llegar
                </span>
              </button>
              </a>
          </div>
        </div>
      </section>
      <section className="window-back">
        <div
          className="window-reception"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="200"
        >
          <div className="d-flex justify-content-center align-items-center w-75">
            <p className="display-3 text-shadow2 text-center font-paris pl-4 pr-4">
              Recepción
            </p>
          </div>
        </div>
      </section>
      <section
        className="recepcion-information d-flex align-items-center justify-content-center"
      >
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          data-aos-offset="400"
        >
          <div
            className="d-flex text-center justify-content-center align-items-center"
          >
            <div>
              <h2 data-aos="zoom-in-up"             data-aos-easing="linear"
              data-aos-duration="1500" className="font-gold font-paris text-center display-3 px-3">Salón Lantana</h2>

              <img
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
                loading="lazy"
                className="img-ubicaciones mt-4"
                src={salonUbicacion}
                alt="iglesia"
              />
            </div>
          </div>

          <p data-aos="zoom-in-up"             
          data-aos-easing="linear"
          data-aos-duration="1500"  className="hora pt-4 text-center display-4">7:00pm</p>
<div className="d-flex justify-content-around align-items-center">
          <img
            loading="lazy"
            className="decoration mb-4 pb-4 rotated-element"
            src={lineaAlReves}
            alt="linea"
          />
        </div>
          <p data-aos="zoom-in-up"             data-aos-easing="linear"
          data-aos-duration="1500"  className="lead  text-center mr-4 ml-4">
          Calle Sin Nombre, s/n Fracc. Pirámides 76900 Corregidora (Querétaro)</p>
          <div className="d-flex justify-content-center align-items-center">
          <a
              className=""
              target="_blank"
              href="https://www.google.com/maps/place/Capilla+San+Peregrino+Laziosi/@21.9313725,-102.3243691,15z/data=!4m6!3m5!1s0x8429ef3e2b1278e7:0x7fd5303f7cc86d3f!8m2!3d21.9313725!4d-102.3243691!16s%2Fg%2F11fsmvbscp?entry=ttu"
              ><button
                className="animate__pulse animate__animated animate__infinite btn btn-ver-mapa display-6 py-3 d-flex align-items-center"
              >
                <i className="bi bi-geo-alt text-dark "></i>
                <span
                  className=" d-flex text-dark font-cormo align-items-center justify-content-center p-0 m-0"
                >
                  Cómo llegar
                </span>
              </button>
              </a>
        </div>
          </div>
      </section>
    </>
  );
};

export default Location;
