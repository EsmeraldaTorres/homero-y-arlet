import React from "react";
import Lugar from "./Lugar";
import { useGuest } from "../../Context/GuestContext";
const Location = () => {
  const { eventData } = useGuest();

  return (
    <>
      {/* Misa */}
      <section className="window-back">
        <div
          className="window-misa"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="200"
        >
          <div className="d-flex justify-content-center align-items-center">
            <p className="display-3 text-center text-shadow2 text-white font-paris pl-4 pr-4">
              Ceremonia Religiosa
            </p>
          </div>
        </div>
      </section>

      <Lugar
        title={eventData.locations.misa.title}
        name={eventData.locations.misa.name}
        imgSrc={eventData.locations.misa.image}
        hour={eventData.locations.misa.time}
        address={eventData.locations.misa.address}
        mapUrl={eventData.locations.misa.mapUrl}
        id={eventData.locations.misa.id}
        zona={eventData.locations.misa.zona}
      />

      {/* Recepción */}
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

      <Lugar
        id={eventData.locations.recepcion.id}
        title={eventData.locations.recepcion.title}
        name={eventData.locations.recepcion.name}
        imgSrc={eventData.locations.recepcion.image}
        hour={eventData.locations.recepcion.time}
        address={eventData.locations.recepcion.address}
        mapUrl={eventData.locations.recepcion.mapUrl}
        zona={eventData.locations.recepcion.zona}
      />
    </>
  );
};

export default Location;
