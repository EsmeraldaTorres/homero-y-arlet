// components/HotelCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ name, image, distance, address, mapUrl }) => {
  return (
    <div className="d-flex p-3 justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="txt-pink-dark pr-4 pl-4 mb-4 display-5 title2 text-center font-paris"
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
            src={image}
            alt={name}
          />
        </div>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="txt-pink-dark font-paris display-5 pl-2 pr-2 text-center"
        >
          <i className="bi bi-car-front-fill"></i> {distance}
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-infor pt-4 font-aleo text-center mr-4 ml-4"
        >
          {address}
        </p>
        <div className="d-flex align-items-center py-4 justify-content-center">
          <Link target="_blank" className="text-white" to={mapUrl}>
            <button className="animate__pulse animate__animated animate__infinite btn btn-ver-mapa display-6 py-3 d-flex align-items-center">
              <i className="bi bi-geo-alt font-gold"></i>
              <span className="d-flex display-5 font-paris font-gold align-items-center justify-content-center p-0 m-0">
                Ver más detalles
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
