import React from "react";
import lineaAlReves from "../../assets/img/lineaalreves.png";

const Lugar = ({ title, name, imgSrc, hour, address, mapUrl }) => {
  return (
    <section className="recepcion-information d-flex align-items-center justify-content-center">
      <div>
        <h2
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="txt-green display-3 title2 text-center font-paris font-gold font-aleo display-4 pr-4 pl-4 mb-4"
        >
          {name}
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            loading="lazy"
            className="img-ubicaciones"
            src={imgSrc}
            alt={name}
          />
        </div>
        <p
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="hora pt-4 font-aleo text-center"
        >
          {hour}
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="lead font-aleo text-center mr-4 ml-4 text-infor"
        >
          {address}
        </p>
        <div className="d-flex justify-content-center pt-4">
          <img className="decoration" src={lineaAlReves} alt="decoración" />
        </div>
        <div className="d-flex align-items-center py-4 justify-content-center">
          <a target="_blank" href={mapUrl} rel="noopener noreferrer">
            <button className="animate__pulse animate__animated animate__infinite btn btn-ver-mapa display-6 py-3 d-flex align-items-center">
              <i className="bi bi-geo-alt text-dark"></i>
              <span className="d-flex text-dark font-cormo align-items-center justify-content-center p-0 m-0">
                Cómo llegar
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Lugar;
