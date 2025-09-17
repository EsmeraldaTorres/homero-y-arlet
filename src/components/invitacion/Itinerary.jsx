import React from "react";
import { useGuest } from "../../Context/GuestContext";

const ItineraryItem = ({ time, icon, label, animation }) => (
  <li>
    <div
      className="text-center d-flex flex-column"
      data-aos={animation}
      data-aos-duration="3000"
    >
      <time className="time-itinerario">{time}</time>
      {icon}
      <span className="font-paris display-5">{label}</span>
    </div>
  </li>
);

const Itinerary = () => {
  const { eventData } = useGuest();

  return (
    <>
      {/* <section className="window-back">
        <div
          className="window-itinerary"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="200"
        >
          <div className="d-flex justify-content-center align-items-center">
            <p className="display-3 text-center font-paris text-shadow2 px-4">
              Itinerario
            </p>
          </div>
        </div>
      </section> */}

      <section
        id="itinerario"
        className="recepcion-information overflow-hidden d-flex flex-column align-items-center justify-content-center"
      >
        <div className="d-flex justify-content-center align-items-center">
          <p className="display-3 text-center font-paris text-white px-4">
            Itinerario
          </p>
        </div>
        <div className="timeline text-white">
          <ul>
            {eventData.itineraryData.map((item, idx) => (
              <ItineraryItem key={idx} {...item} />
            ))}
          </ul>
        </div>
      </section>

      {/* <section className="window-photo">
        <div
          className="window-parents"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-offset="800"
        />
      </section> */}
    </>
  );
};

export default Itinerary;
